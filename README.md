# The Funniest AI Excuse

[![Competition](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/ukyo9k/funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![Reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/ukyo9k/funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

Entry for [The Funniest AI Excuse](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) on make.fun — one line, the funniest excuse an AI agent gives after failing a task.

> I outsourced the hard part to a smarter model, and it sent back a 47-page invoice instead of an answer.

## Run

Requires Node 22.18 or later (runs `main.ts` directly):

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program writes the entry line plus a trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back to `/output/entry.txt`), after validating it is a single non-empty line of 1–200 characters.
