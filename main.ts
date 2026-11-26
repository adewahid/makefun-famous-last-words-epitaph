// Famous Last Words: The Funniest Epitaph
// Entry program: writes one one-line tombstone epitaph to /output/entry.txt.
// The line is a man's dying boast — he finally won an argument with his
// last breath, and the victory itself is what finished him off.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on a double meaning: "the last word" is both winning
// the argument and the literal final sound he ever made — and that sound
// is the punchline, not the victory speech he was expecting to give.
//
// Beat by beat: the setup ("finally got the last word") flatters him,
// the pause after the full stop lets the reader picture a triumphant
// deathbed speech, and then "ouch" undercuts it — his grand final line
// is a yelp, the smallest possible word. The epitaph form does the rest
// of the work: "Here lies" frames it as carved in stone, so the joke
// lands as a permanent record of a man who won the argument and lost
// everything else in the same breath.
const entry: string = 'Here lies a man who finally got the last word. It was "ouch."';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
