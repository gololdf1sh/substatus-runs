import { execFileSync, spawnSync } from "node:child_process";
import { runs } from "./data.js";

const selectedTitles = process.argv.slice(2);
const runsToStart = selectedTitles.length ? runs.filter((run) => selectedTitles.includes(run.title)) : runs;

for (const run of runsToStart) {
  const env = { ...process.env, TESTOMATIO_TITLE: run.title };

  const runId = execFileSync("npx", ["@testomatio/reporter", "start", "--format", "id"], { env, encoding: "utf8" }).trim();

  const grep = run.statuses.map((status) => `${status}:`).join("|");
  spawnSync("npx", ["playwright", "test", "--grep", grep], { env: { ...env, TESTOMATIO_RUN: runId }, stdio: "inherit" });

  execFileSync("npx", ["@testomatio/reporter", "finish"], { env: { ...env, TESTOMATIO_RUN: runId }, stdio: "inherit" });

  console.log(`${run.title}: ${runId}`);
}
