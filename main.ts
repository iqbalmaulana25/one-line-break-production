// Break Production, Own It
// Writes one brutally honest one-line confession to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I skipped the tests, merged my own PR, and deleted the production database. The outage is me — on purpose, by accident.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
