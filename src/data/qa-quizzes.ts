export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const qaQuizzes: Record<string, QuizQuestion[]> = {
  "introduction-to-software-testing": [
    {
      question: "What is the main goal of software testing?",
      options: [
        "To write more code",
        "To find defects before users do",
        "To design the user interface",
        "To sell the software",
      ],
      correctIndex: 1,
      explanation: "Testing finds bugs early so users are not affected.",
    },
    {
      question: "Testing also confirms that software meets what?",
      options: ["Requirements", "Marketing budget", "Server cost", "Team size"],
      correctIndex: 0,
      explanation: "Testing verifies the software against agreed requirements.",
    },
    {
      question: "In a banking app, a wrong password should result in:",
      options: [
        "Access to the account",
        "An error message",
        "A blank screen",
        "A money transfer",
      ],
      correctIndex: 1,
      explanation: "Invalid credentials must be rejected with a clear error.",
    },
  ],
  "manual-testing": [
    {
      question: "Manual testing is performed by:",
      options: ["A script", "A human tester", "The database", "The compiler"],
      correctIndex: 1,
      explanation: "A person executes the test steps by hand.",
    },
    {
      question: "Manual testing is especially good at finding:",
      options: [
        "Usability and visual issues",
        "Thousands of repeated checks",
        "Server load limits",
        "Code coverage numbers",
      ],
      correctIndex: 0,
      explanation: "Humans notice look-and-feel problems automation may miss.",
    },
    {
      question: "Manual testing requires coding skills?",
      options: ["Always", "Usually not", "Only for logins", "Only on mobile"],
      correctIndex: 1,
      explanation: "It is easy to start without programming knowledge.",
    },
  ],
  sdlc: [
    {
      question: "SDLC stands for:",
      options: [
        "Software Design Life Chart",
        "Software Development Life Cycle",
        "System Data Load Cycle",
        "Standard Debug Log Cycle",
      ],
      correctIndex: 1,
      explanation: "It is the full cycle of building and maintaining software.",
    },
    {
      question: "Which phase usually comes first?",
      options: ["Testing", "Deployment", "Requirements", "Maintenance"],
      correctIndex: 2,
      explanation: "Teams collect requirements before designing or coding.",
    },
    {
      question: "Which is the last ongoing phase?",
      options: ["Maintenance", "Design", "Development", "Test Planning"],
      correctIndex: 0,
      explanation: "After release, the product is maintained and updated.",
    },
  ],
  stlc: [
    {
      question: "STLC describes the phases of:",
      options: ["Testing activities", "Marketing", "Hiring", "Server setup"],
      correctIndex: 0,
      explanation: "STLC is the Software Testing Life Cycle.",
    },
    {
      question: "Test cases are created in which phase?",
      options: ["Test Closure", "Test Design", "Deployment", "Requirements"],
      correctIndex: 1,
      explanation: "Test Design is where detailed test cases are written.",
    },
    {
      question: "Reviewing results at the end happens in:",
      options: ["Test Closure", "Test Planning", "Environment Setup", "Design"],
      correctIndex: 0,
      explanation: "Test Closure reviews outcomes and lessons learned.",
    },
  ],
  "functional-testing": [
    {
      question: "Functional testing answers which question?",
      options: [
        "How fast is it?",
        "Does this feature work as it should?",
        "How secure is the server?",
        "How many users can log in?",
      ],
      correctIndex: 1,
      explanation: "It checks features against expected behavior.",
    },
    {
      question: "Functional testing focuses on:",
      options: [
        "Inputs, outputs and business rules",
        "Code loops only",
        "Network speed",
        "Screen colors",
      ],
      correctIndex: 0,
      explanation: "It treats the feature as a set of inputs and outputs.",
    },
    {
      question: "Which is a form of functional testing?",
      options: ["Load testing", "Acceptance testing", "Stress testing", "Usability testing"],
      correctIndex: 1,
      explanation: "Acceptance testing checks features against requirements.",
    },
  ],
  "non-functional-testing": [
    {
      question: "Non-functional testing checks:",
      options: [
        "What the system does",
        "How the system performs and behaves",
        "Who wrote the code",
        "How many files exist",
      ],
      correctIndex: 1,
      explanation: "It targets quality attributes like speed and security.",
    },
    {
      question: "Which is a non-functional test type?",
      options: ["Performance testing", "Unit testing", "Retesting", "Test design"],
      correctIndex: 0,
      explanation: "Performance, load, security and usability are non-functional.",
    },
    {
      question: "Checking a page loads in under 3 seconds is:",
      options: ["Functional", "Non-functional", "Regression", "Sanity"],
      correctIndex: 1,
      explanation: "Speed is a quality attribute, so it is non-functional.",
    },
  ],
  "smoke-testing": [
    {
      question: "Smoke testing is also called:",
      options: [
        "Build Verification Testing",
        "Boundary Testing",
        "Load Testing",
        "Unit Testing",
      ],
      correctIndex: 0,
      explanation: "It verifies whether a build is worth testing further.",
    },
    {
      question: "Smoke testing checks:",
      options: [
        "Every edge case deeply",
        "Only the most important features quickly",
        "Only the database",
        "Only the code comments",
      ],
      correctIndex: 1,
      explanation: "It is a shallow but broad stability check.",
    },
    {
      question: "If a smoke test fails, the team should:",
      options: [
        "Continue deep testing",
        "Reject the build and send it back",
        "Release to users",
        "Delete the test cases",
      ],
      correctIndex: 1,
      explanation: "An unstable build is returned to developers.",
    },
  ],
  "sanity-testing": [
    {
      question: "Sanity testing is best described as:",
      options: ["Narrow and deep", "Wide and shallow", "Random", "Automated only"],
      correctIndex: 0,
      explanation: "It focuses deeply on the changed area only.",
    },
    {
      question: "Sanity testing is done after:",
      options: [
        "A small change or bug fix",
        "Requirements gathering",
        "Deployment to all users",
        "Hiring a new tester",
      ],
      correctIndex: 0,
      explanation: "It confirms a small change works as expected.",
    },
    {
      question: "After a checkout bug fix, a sanity test would check:",
      options: ["The profile page", "The checkout flow", "The blog", "Nothing"],
      correctIndex: 1,
      explanation: "Only the affected area is tested.",
    },
  ],
  "regression-testing": [
    {
      question: "Regression testing makes sure that:",
      options: [
        "New changes did not break existing features",
        "The new feature exists",
        "The server is fast",
        "The design looks modern",
      ],
      correctIndex: 0,
      explanation: "It re-tests working features after changes.",
    },
    {
      question: "In large projects regression testing is often:",
      options: ["Automated", "Skipped", "Done by users", "Done once a year"],
      correctIndex: 0,
      explanation: "Automation makes repeated regression runs practical.",
    },
    {
      question: "A good regression suite covers:",
      options: [
        "Critical user paths",
        "Only new code",
        "Only the login page",
        "Only error messages",
      ],
      correctIndex: 0,
      explanation: "Important business flows must keep working.",
    },
  ],
  retesting: [
    {
      question: "Retesting is done to:",
      options: [
        "Confirm a reported defect is fixed",
        "Check unrelated features",
        "Measure performance",
        "Write new requirements",
      ],
      correctIndex: 0,
      explanation: "It verifies the exact fix for a known bug.",
    },
    {
      question: "Retesting uses:",
      options: [
        "The failed test cases",
        "Brand new random steps",
        "Only automated load tests",
        "No steps at all",
      ],
      correctIndex: 0,
      explanation: "The same steps that failed are run again.",
    },
    {
      question: "A defect is closed when:",
      options: [
        "The developer says so",
        "Retesting shows the fix works",
        "The sprint ends",
        "It is reported",
      ],
      correctIndex: 1,
      explanation: "Verification by the tester closes the defect.",
    },
  ],
  "black-box-testing": [
    {
      question: "In black box testing the tester:",
      options: [
        "Knows the internal code",
        "Does not see the internal code",
        "Writes the code",
        "Deploys the code",
      ],
      correctIndex: 1,
      explanation: "Testing is based on inputs, outputs and requirements.",
    },
    {
      question: "Black box testing represents which viewpoint?",
      options: ["The user's", "The database admin's", "The compiler's", "The designer's"],
      correctIndex: 0,
      explanation: "It checks the product as a user would experience it.",
    },
    {
      question: "Which is a black box activity?",
      options: [
        "Branch coverage",
        "Entering valid and invalid logins",
        "Reading source code",
        "Unit testing a function",
      ],
      correctIndex: 1,
      explanation: "Inputs are tested without looking at code.",
    },
  ],
  "white-box-testing": [
    {
      question: "White box testing requires:",
      options: [
        "Knowledge of internal code",
        "No technical knowledge",
        "Only a browser",
        "Only screenshots",
      ],
      correctIndex: 0,
      explanation: "The tester examines code paths and logic.",
    },
    {
      question: "Which is a white box technique?",
      options: ["Branch coverage", "Usability review", "Load testing", "Bug triage"],
      correctIndex: 0,
      explanation: "Statement, branch and path coverage are white box.",
    },
    {
      question: "White box testing is usually done by:",
      options: ["Developers", "Customers", "Managers", "Designers"],
      correctIndex: 0,
      explanation: "It needs programming knowledge.",
    },
  ],
  "gray-box-testing": [
    {
      question: "Gray box testing combines:",
      options: [
        "Black box and white box",
        "Load and stress testing",
        "Smoke and sanity testing",
        "Manual and usability testing",
      ],
      correctIndex: 0,
      explanation: "The tester has limited internal knowledge.",
    },
    {
      question: "Gray box testing is useful for:",
      options: [
        "Database and integration issues",
        "Choosing brand colors",
        "Writing requirements",
        "Hiring testers",
      ],
      correctIndex: 0,
      explanation: "Partial technical insight helps find data defects.",
    },
    {
      question: "A gray box tester knows:",
      options: [
        "Every line of code",
        "Some architecture or database details",
        "Nothing about the system",
        "Only the release date",
      ],
      correctIndex: 1,
      explanation: "Limited knowledge guides better test cases.",
    },
  ],
  "test-scenario": [
    {
      question: "A test scenario is:",
      options: [
        "A high-level situation to test",
        "A detailed step list",
        "A bug report",
        "A code review",
      ],
      correctIndex: 0,
      explanation: "It describes what to verify in one line.",
    },
    {
      question: "One test scenario can contain:",
      options: ["Many test cases", "Only one step", "No test cases", "Only bugs"],
      correctIndex: 0,
      explanation: "Scenarios break down into several detailed test cases.",
    },
    {
      question: "Which is a test scenario?",
      options: [
        "Verify that a user can complete a purchase",
        "Click the Login button",
        "Expected result: dashboard opens",
        "Status: Failed",
      ],
      correctIndex: 0,
      explanation: "It is a broad statement of functionality.",
    },
  ],
  "test-case": [
    {
      question: "A test case includes:",
      options: [
        "Steps and expected result",
        "Only a title",
        "Only a screenshot",
        "Only the bug status",
      ],
      correctIndex: 0,
      explanation: "Steps, expected and actual results are essential.",
    },
    {
      question: "Test cases help the team by:",
      options: [
        "Making tests repeatable",
        "Reducing requirements",
        "Speeding up the server",
        "Removing bugs automatically",
      ],
      correctIndex: 0,
      explanation: "Anyone can run the same test the same way.",
    },
    {
      question: "Which field records what actually happened?",
      options: ["Actual result", "Precondition", "Test ID", "Description"],
      correctIndex: 0,
      explanation: "The actual result is compared with the expected result.",
    },
  ],
  "test-data": [
    {
      question: "Test data is:",
      options: [
        "Input used to run test cases",
        "The bug report",
        "The source code",
        "The release note",
      ],
      correctIndex: 0,
      explanation: "It is the values fed into the application.",
    },
    {
      question: "Good test data includes:",
      options: [
        "Valid, invalid and boundary values",
        "Only valid values",
        "Only text values",
        "Only empty values",
      ],
      correctIndex: 0,
      explanation: "Mixed data uncovers more defects.",
    },
    {
      question: "For a field accepting 18-60, which is a boundary value?",
      options: ["60", "35", "abc", "0.5"],
      correctIndex: 0,
      explanation: "60 is the upper limit of the range.",
    },
  ],
  "bug-reporting": [
    {
      question: "A good bug report must be:",
      options: [
        "Clear and easy to reproduce",
        "Long and vague",
        "Written only verbally",
        "Kept private",
      ],
      correctIndex: 0,
      explanation: "Developers need exact steps to reproduce the issue.",
    },
    {
      question: "Which attachment makes a bug report stronger?",
      options: ["Screenshots and logs", "A poem", "The team roster", "The price list"],
      correctIndex: 0,
      explanation: "Evidence speeds up debugging.",
    },
    {
      question: "Which pair belongs in every bug report?",
      options: [
        "Expected and actual result",
        "Salary and role",
        "Server IP and password",
        "Sprint name only",
      ],
      correctIndex: 0,
      explanation: "The difference between them defines the defect.",
    },
  ],
  "bug-life-cycle": [
    {
      question: "A newly found bug is marked:",
      options: ["New", "Closed", "Verified", "Fixed"],
      correctIndex: 0,
      explanation: "New is the first state of a reported defect.",
    },
    {
      question: "If a fix does not work, the bug is:",
      options: ["Reopened", "Deleted", "Closed", "Ignored"],
      correctIndex: 0,
      explanation: "The bug goes back to the developer.",
    },
    {
      question: "Which state comes right after Fixed?",
      options: ["Retest", "New", "Assigned", "Reopen"],
      correctIndex: 0,
      explanation: "The tester retests before verifying and closing.",
    },
  ],
  "severity-and-priority": [
    {
      question: "Severity describes:",
      options: [
        "How much the bug affects the system",
        "How soon it must be fixed",
        "Who found it",
        "How long it took to find",
      ],
      correctIndex: 0,
      explanation: "Severity is about impact.",
    },
    {
      question: "Priority describes:",
      options: ["How soon it should be fixed", "The bug's impact", "The code quality", "The tester's skill"],
      correctIndex: 0,
      explanation: "Priority is about urgency of the fix.",
    },
    {
      question: "A payment failure for all users is:",
      options: [
        "High severity, high priority",
        "Low severity, low priority",
        "Low severity, high priority",
        "Trivial",
      ],
      correctIndex: 0,
      explanation: "It blocks business and must be fixed immediately.",
    },
  ],
  "equivalence-partitioning": [
    {
      question: "Equivalence partitioning divides input into:",
      options: [
        "Groups treated the same way",
        "Random samples",
        "Code branches",
        "Bug categories",
      ],
      correctIndex: 0,
      explanation: "One value per partition is enough.",
    },
    {
      question: "The main benefit is:",
      options: [
        "Fewer test cases with good coverage",
        "Faster servers",
        "Better colors",
        "More bugs created",
      ],
      correctIndex: 0,
      explanation: "It avoids testing every possible value.",
    },
    {
      question: "For a field accepting 18-60, which is an invalid partition value?",
      options: ["70", "25", "40", "18"],
      correctIndex: 0,
      explanation: "70 is outside the accepted range.",
    },
  ],
  "boundary-value-analysis": [
    {
      question: "Boundary value analysis focuses on:",
      options: ["Edges of input ranges", "Middle values only", "Code comments", "Server logs"],
      correctIndex: 0,
      explanation: "Many defects hide at minimum and maximum limits.",
    },
    {
      question: "For a range of 18 to 60, good boundary values are:",
      options: ["17, 18, 60, 61", "30, 40, 50", "1, 2, 3", "100, 200"],
      correctIndex: 0,
      explanation: "Test just below, at, and just above each limit.",
    },
    {
      question: "This technique is often used together with:",
      options: ["Equivalence partitioning", "Load testing", "Smoke testing", "Bug triage"],
      correctIndex: 0,
      explanation: "The two techniques complement each other.",
    },
  ],
  "api-testing-basics": [
    {
      question: "API testing mainly checks:",
      options: [
        "Requests, responses and status codes",
        "Button colors",
        "Font sizes",
        "Team velocity",
      ],
      correctIndex: 0,
      explanation: "It validates data exchanged between systems.",
    },
    {
      question: "Which status code means success?",
      options: ["200", "404", "500", "401"],
      correctIndex: 0,
      explanation: "200 OK indicates a successful request.",
    },
    {
      question: "APIs allow:",
      options: [
        "Different systems to communicate",
        "Users to change fonts",
        "Faster typing",
        "Automatic bug fixing",
      ],
      correctIndex: 0,
      explanation: "APIs are the communication layer between systems.",
    },
  ],
  "postman-basics": [
    {
      question: "Postman is used for:",
      options: ["Testing APIs", "Editing images", "Writing documents", "Managing salaries"],
      correctIndex: 0,
      explanation: "It sends requests and inspects responses.",
    },
    {
      question: "Which request type creates new data?",
      options: ["POST", "GET", "DELETE", "HEAD"],
      correctIndex: 0,
      explanation: "POST sends data to create a resource.",
    },
    {
      question: "In Postman, requests can be grouped into:",
      options: ["Collections", "Folders of images", "Spreadsheets", "Tickets"],
      correctIndex: 0,
      explanation: "Collections organize and run related requests.",
    },
  ],
  "jira-basics": [
    {
      question: "Jira is mainly used to:",
      options: ["Track bugs and tasks", "Send emails", "Design logos", "Host websites"],
      correctIndex: 0,
      explanation: "It is a project and issue tracking tool.",
    },
    {
      question: "A tester in Jira typically:",
      options: [
        "Creates and updates bug tickets",
        "Deploys the app",
        "Writes the database",
        "Signs contracts",
      ],
      correctIndex: 0,
      explanation: "Testers report defects and follow their status.",
    },
    {
      question: "Jira helps teams with:",
      options: ["Workflows and reports", "Photo editing", "Video calls", "Payments"],
      correctIndex: 0,
      explanation: "Workflows, dashboards and reports keep work organized.",
    },
  ],
  "requirement-traceability-matrix": [
    {
      question: "An RTM links:",
      options: [
        "Requirements to test cases",
        "Bugs to developers",
        "Sprints to releases",
        "Users to passwords",
      ],
      correctIndex: 0,
      explanation: "It maps each requirement to its tests.",
    },
    {
      question: "The main purpose of an RTM is to ensure:",
      options: [
        "Full test coverage of requirements",
        "Faster code",
        "Nicer design",
        "Lower cost",
      ],
      correctIndex: 0,
      explanation: "Nothing in the requirements is left untested.",
    },
    {
      question: "An RTM is especially useful during:",
      options: ["Audits and regression planning", "Lunch breaks", "Logo design", "Hiring"],
      correctIndex: 0,
      explanation: "It proves coverage and guides re-testing.",
    },
  ],
};

export function getQuizByTopicId(id: string): QuizQuestion[] {
  return qaQuizzes[id] ?? [];
}
