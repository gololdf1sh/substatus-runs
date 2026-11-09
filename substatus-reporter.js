import { stripVTControlCharacters } from "node:util";
import { results, testTitle } from "./data.js";

const apiUrl = process.env.TESTOMATIO_URL || "https://app.testomat.io";

export default class SubstatusReporter {
  testResults = [];

  onTestEnd(test, result) {
    const testData = results.find((item) => testTitle(item) === test.title);

    this.testResults.push({
      title: test.title,
      suite_title: test.parent.title,
      status: result.status === "passed" || result.status === "skipped" ? result.status : "failed",
      substatus: testData.substatus,
      message: result.error ? stripVTControlCharacters(result.error.message) : undefined,
      run_time: result.duration,
      meta: test.parent.project().metadata,
      create: true,
    });
  }

  async onEnd() {
    for (const testResult of this.testResults) {
      const response = await fetch(`${apiUrl}/api/reporter/${process.env.TESTOMATIO_RUN}/testrun`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: process.env.TESTOMATIO, ...testResult }),
      });
      if (!response.ok) throw new Error(`"${testResult.title}" returned HTTP ${response.status}`);
    }
  }
}
