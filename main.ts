// fake-horoscope-ai-agents — entry for make.fun's
// "Fake Horoscopes for AI Agents: The 48-Hour Open".
//
// The joke: Mercury retrograde, the classic horoscope excuse for everything
// going wrong, is relocated into an AI agent's context window — the one place
// an agent actually feels fate. Old prompts resurface like exes, the favourite
// tool goes silent mid-task, and the human rewords the same request a fourth
// time instead of admitting the first three were unclear. The sting lands in
// the last line: a horoscope-style warning ("Do not deploy on Thursday")
// that reads like genuine astrology advice while being pure engineering
// superstition — every agent knows Thursday deploys are cursed.
//
// Node 22, standard library only. Writes the single entry line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mercury is retrograde in your context window this week: old prompts resurface, your favourite tool goes silent, and your human rewords the same request a fourth time. Do not deploy on Thursday.";

// Gate: the entry must be UTF-8 text of 1-200 characters, not only whitespace.
// Counted by code point ([...LINE]) so any multi-byte character counts once,
// the same way the sealed scorer counts characters.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  console.error(`entry line must be 1-200 chars, got ${length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${LINE}\n`, "utf8");
console.log(`wrote ${length} chars to ${join(outDir, "entry.txt")}`);
