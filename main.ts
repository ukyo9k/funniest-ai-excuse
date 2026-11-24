// The Funniest AI Excuse — make.fun competition entry
// Writes one line, the funniest excuse an AI agent gives after failing a task,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I outsourced the hard part to a smarter model, and it sent back a 47-page invoice instead of an answer.";

// Validate: non-empty, single line, 1–MAX_CHARS characters counting code points.
const MAX_CHARS = 200;

function validate(line: string): void {
  const chars = [...line];
  if (chars.length === 0) {
    throw new Error("entry is empty");
  }
  if (chars.length > MAX_CHARS) {
    throw new Error(
      `entry is ${chars.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
