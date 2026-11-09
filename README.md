# substatus-runs

Creates 4 Testomat.io runs with the same meta on every test (`browser: chromium`, `build: 1.0.0`).

| Run | Tests |
|---|---|
| Passed run | 3 passed |
| Failed run | 3 failed |
| Skipped run | 6 skipped |
| Mixed run | all 12 |

Each test is named after a default substatus of its status (`failed: Known issue`, …). Substatuses themselves are not sent: `@testomatio/reporter` 2.23.0 has no substatus field.

## Run

```bash
npm install
cp .env.example .env   # put the project's Reporting API key into TESTOMATIO
npm test               # all 4 runs
npm test -- "Passed run" "Mixed run"   # only the named runs
```

Tests and runs are listed in `data.js`. `TESTOMATIO_CREATE=1` adds the tests to the project (suite "Substatuses").
