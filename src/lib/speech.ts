// Free, offline-capable German pronunciation using the browser's built-in
// Web Speech API (SpeechSynthesis). No API key or backend required.

let cachedVoices: SpeechSynthesisVoice[] = [];
let voicesLoaded = false;

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return Promise.resolve([]);
  }

  const synth = window.speechSynthesis;
  const existing = synth.getVoices();
  if (existing.length > 0) {
    cachedVoices = existing;
    voicesLoaded = true;
    return Promise.resolve(existing);
  }

  if (voicesLoaded) return Promise.resolve(cachedVoices);

  return new Promise((resolve) => {
    const handle = () => {
      const voices = synth.getVoices();
      if (voices.length > 0) {
        cachedVoices = voices;
        voicesLoaded = true;
        synth.removeEventListener("voiceschanged", handle);
        resolve(voices);
      }
    };
    synth.addEventListener("voiceschanged", handle);
    // Some browsers never fire voiceschanged if voices are already available
    // but getVoices() returned empty on first tick; retry once shortly after.
    window.setTimeout(() => {
      const voices = synth.getVoices();
      if (voices.length > 0) {
        cachedVoices = voices;
        voicesLoaded = true;
        synth.removeEventListener("voiceschanged", handle);
        resolve(voices);
      }
    }, 250);
  });
}

function pickGermanVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (voices.length === 0) return null;

  // Prefer high-quality native/network voices (e.g. Google Deutsch) over
  // lower-quality local ones, and prefer exact de-DE over de-AT/de-CH.
  const germanVoices = voices.filter((v) => v.lang?.toLowerCase().startsWith("de"));
  if (germanVoices.length === 0) return null;

  const byQuality = [...germanVoices].sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) => {
      let s = 0;
      if (v.lang.toLowerCase() === "de-de") s += 2;
      if (/google/i.test(v.name)) s += 3;
      if (!v.localService) s += 1;
      return s;
    };
    return score(b) - score(a);
  });

  return byQuality[0];
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * Speaks German text aloud using the browser's native TTS voices.
 * Returns false if speech synthesis isn't available or no German voice was found.
 */
export async function speakGerman(text: string): Promise<boolean> {
  if (!isSpeechSupported() || !text.trim()) return false;

  const synth = window.speechSynthesis;
  synth.cancel(); // stop anything currently speaking so clicks don't queue up

  const voices = await loadVoices();
  const voice = pickGermanVoice(voices);

  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = voice?.lang || "de-DE";
  if (voice) utterance.voice = voice;
  utterance.rate = 0.9; // slightly slower for clarity while learning
  utterance.pitch = 1;

  synth.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
