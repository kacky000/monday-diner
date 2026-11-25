// Writes the entry: a one-star review of Monday as if it were a restaurant (at most 25 words).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "One star. Ordered the weekend. Server brought Monday, said the kitchen was out, then still charged me for two days I never touched.";
const words = line.split(/\s+/).filter(Boolean).length;
if (words > 25 || [...line].length > 180) throw new Error(`entry is ${words} words, ${[...line].length} characters`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
