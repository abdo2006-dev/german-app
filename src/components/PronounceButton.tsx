import { useState, useCallback } from "react";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { speakGerman } from "@/lib/speech";

interface PronounceButtonProps {
  text: string;
  size?: "icon" | "sm";
  className?: string;
  label?: string;
}

export function PronounceButton({ text, size = "icon", className, label }: PronounceButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  const handleClick = useCallback(
    async (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      if (!text.trim()) return;
      setSpeaking(true);
      await speakGerman(text);
      // Speech is fire-and-forget (no reliable onend across browsers for short
      // words), so just show a brief pressed state for feedback.
      window.setTimeout(() => setSpeaking(false), 500);
    },
    [text]
  );

  if (size === "sm") {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={handleClick}
        className={cn("gap-1.5", className)}
        aria-label={`Pronounce "${text}"`}
      >
        <Volume2 className={cn("h-3.5 w-3.5", speaking && "animate-pulse")} />
        {label ?? "Pronounce"}
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className={cn("h-8 w-8 shrink-0 text-muted-foreground hover:text-primary", className)}
      aria-label={`Pronounce "${text}"`}
    >
      <Volume2 className={cn("h-4 w-4", speaking && "animate-pulse text-primary")} />
    </Button>
  );
}
