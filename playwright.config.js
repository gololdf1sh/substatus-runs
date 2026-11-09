import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 1,
  reporter: [["list"], ["@testomatio/reporter/playwright"]],
  metadata: { browser: "chromium", build: "1.0.0" },
});
