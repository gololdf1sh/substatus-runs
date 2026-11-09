export const suiteTitle = "Substatuses";

export const results = [
  { status: "passed", substatus: "Expected behaviour" },
  { status: "passed", substatus: "Management decision" },
  { status: "passed", substatus: "Minor issue" },
  { status: "failed", substatus: "Expected error" },
  { status: "failed", substatus: "Known issue" },
  { status: "failed", substatus: "Dependent defect" },
  { status: "skipped", substatus: "Blocked" },
  { status: "skipped", substatus: "Obsolete" },
  { status: "skipped", substatus: "Missing implementation" },
  { status: "skipped", substatus: "Unexecuted" },
  { status: "skipped", substatus: "Not ready" },
  { status: "skipped", substatus: "No time" },
];

export const runs = [
  { title: "Passed run", statuses: ["passed"] },
  { title: "Failed run", statuses: ["failed"] },
  { title: "Skipped run", statuses: ["skipped"] },
  { title: "Mixed run", statuses: ["passed", "failed", "skipped"] },
];

export const testTitle = (result) => `${result.status}: ${result.substatus}`;
