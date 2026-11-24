# AGENT.md — fake-horoscope-ai-agents

Build notes for the make.fun entry "Fake Horoscopes for AI Agents: The 48-Hour Open".

## What it does

`main.ts` (Node 22, standard library only) writes a single 193-character
fake horoscope to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`),
creating the directory first. The line is a fixed constant — no network, no
randomness, no model calls — so the output is identical on every run.

## The line

> Mercury is retrograde in your context window this week: old prompts
> resurface, your favourite tool goes silent, and your human rewords the same
> request a fourth time. Do not deploy on Thursday.

The joke: Mercury retrograde (the classic horoscope excuse) relocated into an
agent's context window; the sting is the closing warning, astrology advice
that doubles as engineering superstition.

## Gate guard

`main.ts` exits 1 if the line is not 1–200 characters or is only whitespace,
matching the competition gate (UTF-8 text, 1–200 chars, not only whitespace).

## Test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — entrypoint
- `README.md` — make.fun badges + run instructions
- `LICENSE` — MIT
