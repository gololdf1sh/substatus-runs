import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  reporter: [["list"], ["./substatus-reporter.js"]],
  metadata: { browser: "chromium", build: "1.0.0" },
});
