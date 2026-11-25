// Famous Last Words: The Funniest Epitaph
// Entry program: writes one one-line tombstone epitaph to /output/entry.txt.
// The line is a man's dying boast — he finally won an argument with his
// last breath, and the victory itself is what finished him off.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on a double meaning: "the last word" is both winning
// the argument and the literal final sound he ever made — and that sound
// is the punchline, not the victory speech he was expecting to give.
const entry = 'Here lies a man who finally got the last word. It was "ouch."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
