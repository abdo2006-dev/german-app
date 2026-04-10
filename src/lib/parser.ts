/**
 * CSV Parser for vocabulary import
 * 
 * Format: GermanWord, EnglishMeaning, GermanExampleSentence, EnglishExampleTranslation
 * 
 * Supports:
 * - Quoted fields (for commas inside sentences)
 * - Trimming whitespace
 * - Empty line skipping
 * - Row-level error reporting
 */

import { ParsedEntry, ParseResult } from '@/types/flashcard';

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    const nextChar = line[i + 1];
    
    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          // Escaped quote
          current += '"';
          i++;
        } else {
          // End of quoted field
          inQuotes = false;
        }
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        fields.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
  }
  
  // Push last field
  fields.push(current.trim());
  
  return fields;
}

export function parseVocabularyInput(input: string): ParseResult {
  const lines = input.split('\n');
  const entries: ParsedEntry[] = [];
  const errors: { line: number; message: string; raw: string }[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const lineNum = i + 1;
    
    // Skip empty lines
    if (!line) continue;
    
    // Skip comment lines
    if (line.startsWith('#') || line.startsWith('//')) continue;
    
    try {
      const fields = parseCSVLine(line);
      
      if (fields.length < 2) {
        errors.push({
          line: lineNum,
          message: 'Missing required fields (need at least German word and English meaning)',
          raw: line,
        });
        continue;
      }
      
      const [germanWord, englishMeaning, germanExample = '', englishExample = ''] = fields;
      
      if (!germanWord) {
        errors.push({
          line: lineNum,
          message: 'German word is empty',
          raw: line,
        });
        continue;
      }
      
      if (!englishMeaning) {
        errors.push({
          line: lineNum,
          message: 'English meaning is empty',
          raw: line,
        });
        continue;
      }
      
      entries.push({
        germanWord,
        englishMeaning,
        germanExample,
        englishExample,
      });
    } catch (error) {
      errors.push({
        line: lineNum,
        message: 'Failed to parse line',
        raw: line,
      });
    }
  }
  
  return { entries, errors };
}

export function entriesToCSV(entries: ParsedEntry[]): string {
  return entries
    .map(entry => {
      const fields = [
        entry.germanWord,
        entry.englishMeaning,
        entry.germanExample,
        entry.englishExample,
      ];
      
      return fields
        .map(field => {
          // Quote field if it contains comma or quote
          if (field.includes(',') || field.includes('"')) {
            return `"${field.replace(/"/g, '""')}"`;
          }
          return field;
        })
        .join(', ');
    })
    .join('\n');
}
