import { spawnSync } from "node:child_process";
import { runs } from "./data.js";

const selectedTitles = process.argv.slice(2);
const runsToStart = selectedTitles.length ? runs.filter((run) => selectedTitles.includes(run.title)) : runs;

for (const run of runsToStart) {
  const grep = run.statuses.map((status) => `${status}:`).join("|");

  spawnSync("npx", ["playwright", "test", "--grep", grep], { env: { ...process.env, TESTOMATIO_TITLE: run.title, TESTOMATIO_CREATE: "1" }, stdio: "inherit" });
}
