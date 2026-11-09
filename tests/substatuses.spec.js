import { test, expect } from "@playwright/test";
import { results, suiteTitle, testTitle } from "../data.js";

test.describe(suiteTitle, () => {
  for (const result of results) {
    test(testTitle(result), () => {
      test.skip(result.status === "skipped");

      expect(result.status).toBe("passed");
    });
  }
});
