# substatus-runs

Creates 4 Testomat.io runs whose test results carry a substatus and the same meta (`browser: chromium`, `build: 1.0.0`).

| Run | Tests |
|---|---|
| Passed run | 3 passed: Expected behaviour, Management decision, Minor issue |
| Failed run | 3 failed: Expected error, Known issue, Dependent defect |
| Skipped run | 6 skipped: Blocked, Obsolete, Missing implementation, Unexecuted, Not ready, No time |
| Mixed run | all 12 |

## Run

```bash
npm install
cp .env.example .env   # put the project's Reporting API key into TESTOMATIO
npm test               # all 4 runs
npm test -- "Passed run" "Mixed run"   # only the named runs
```

## How it works

`@testomatio/reporter` 2.23.0 has no substatus field, so it only starts and finishes each run. `substatus-reporter.js` sends every test result itself — status, substatus and meta in one `POST /api/reporter/{runId}/testrun` (`create: true` adds the test to the project, suite "Substatuses").

Tests, substatuses and runs are listed in `data.js`. Substatuses must exist in the project's Settings → Custom statuses (the defaults do).
