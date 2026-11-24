// Break Production, Own It
// Writes one brutally honest one-line confession to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I deployed to production without running the tests, and now the site is down. The outage is my fault.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
