export type QATopic = {
  id: string;
  title: string;
  shortDescription: string;
  content: string[];
  example: {
    title: string;
    points: string[];
  };
};

export const qaTopics: QATopic[] = [
  {
    id: "introduction-to-software-testing",
    title: "Introduction to Software Testing",
    shortDescription: "Learn what software testing is and why it matters.",
    content: [
      "Software testing is the process of checking a software application to find defects and make sure it behaves as expected.",
      "The main goal is to identify bugs before the software reaches users, which helps prevent problems and improves quality.",
      "Testing also verifies that the software meets the requirements defined by the business or customer.",
      "A good testing process builds trust with users and protects the reputation of the company.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Imagine a banking app. Testing makes sure users can log in safely, transfer money, and see their balance correctly.",
        "If a tester enters a wrong password, the app should show an error instead of letting the user in.",
      ],
    },
  },
  {
    id: "manual-testing",
    title: "Manual Testing",
    shortDescription: "Test software by hand without using automation tools.",
    content: [
      "Manual testing means a human tester performs test cases by hand without using automation scripts or tools.",
      "It is useful when the application changes frequently, when test cases are simple, or when checking user experience.",
      "Manual testing helps find visual issues, usability problems, and unexpected behavior that automation might miss.",
      "It is often the first type of testing done in a project because it is quick to start and does not require coding skills.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester opens an online shopping website and clicks every menu, button, and link to make sure they work.",
        "They also check if the website looks correct on a mobile phone screen.",
      ],
    },
  },
  {
    id: "sdlc",
    title: "SDLC",
    shortDescription: "Understand the Software Development Life Cycle.",
    content: [
      "SDLC stands for Software Development Life Cycle. It is the process teams follow to design, develop, test, and maintain software.",
      "The main phases are: Requirements, Design, Development, Testing, Deployment, and Maintenance.",
      "Each phase has specific activities and deliverables that help the team move from an idea to a working product.",
      "Following a clear SDLC improves planning, reduces risks, and helps deliver software on time.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A team wants to build a food delivery app. First they collect requirements, then design the screens, then write the code.",
        "After development, testers check the app, and finally it is released to users and updated regularly.",
      ],
    },
  },
  {
    id: "stlc",
    title: "STLC",
    shortDescription: "Learn the Software Testing Life Cycle.",
    content: [
      "STLC stands for Software Testing Life Cycle. It describes the phases of testing activities in a project.",
      "The main phases are: Requirements Analysis, Test Planning, Test Design, Environment Setup, Test Execution, and Test Closure.",
      "In Requirements Analysis, testers understand what the software should do. In Test Planning, they decide what to test and how.",
      "Test Design creates test cases, Environment Setup prepares the tools, Test Execution runs the tests, and Test Closure reviews the results.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Before testing a payment feature, the team plans which test cases to run, prepares test data, and sets up a test bank account.",
        "They then execute the tests and report any defects found.",
      ],
    },
  },
  {
    id: "functional-testing",
    title: "Functional Testing",
    shortDescription: "Verify what the system does against requirements.",
    content: [
      "Functional testing checks what the software does. It tests the features and functions of the application against requirements.",
      "It answers the question: 'Does this feature work the way it should?'",
      "This type of testing does not look at code structure. It focuses on inputs, outputs, and business rules.",
      "Common forms include unit testing, integration testing, system testing, and acceptance testing.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "When a user clicks 'Add to Cart' on a shopping website, functional testing checks that the correct item is added.",
        "It also checks that the cart total is updated correctly.",
      ],
    },
  },
  {
    id: "non-functional-testing",
    title: "Non-Functional Testing",
    shortDescription: "Check how the system performs and behaves.",
    content: [
      "Non-functional testing checks how the system works, not what it does. It focuses on quality attributes like speed, security, and usability.",
      "Common types include performance testing, load testing, security testing, usability testing, and reliability testing.",
      "This testing helps make sure the software is fast, safe, and easy to use under real conditions.",
      "It often requires special tools and environments that simulate real user traffic.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A website is tested to see if it loads in under three seconds when one thousand users visit at the same time.",
        "Security testing checks that user passwords are stored safely and cannot be stolen easily.",
      ],
    },
  },
  {
    id: "smoke-testing",
    title: "Smoke Testing",
    shortDescription: "Quickly verify that a build is stable enough to test.",
    content: [
      "Smoke testing is a quick, high-level check of the most important features of a new software build.",
      "Its purpose is to confirm the build is stable enough for more detailed testing.",
      "It is often called Build Verification Testing because it verifies whether the build is worth testing further.",
      "If the smoke test fails, the build is rejected and sent back to the developers for fixing.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "After a new version of an app is released, a tester checks that the app opens, the login page loads, and the home screen appears.",
        "If any of these basic steps fail, the team does not continue testing deeper features.",
      ],
    },
  },
  {
    id: "sanity-testing",
    title: "Sanity Testing",
    shortDescription: "Narrow and deep check after a small code change.",
    content: [
      "Sanity testing is a narrow, focused check of a specific feature after a small change or bug fix.",
      "It is deeper than smoke testing but covers only the area that was changed.",
      "The goal is to make sure the fix works and that related functionality still behaves correctly.",
      "Sanity testing helps catch problems early without running the entire test suite.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A developer fixes a bug in the checkout page. A tester then checks only the checkout flow, including shipping, payment, and confirmation.",
        "They do not test unrelated areas like user profile or search.",
      ],
    },
  },
  {
    id: "regression-testing",
    title: "Regression Testing",
    shortDescription: "Re-test existing features after new changes.",
    content: [
      "Regression testing means re-running tests on existing features to make sure new changes did not break them.",
      "It is important because fixing one bug or adding a new feature can accidentally cause problems elsewhere.",
      "Regression testing can be done manually or with automation tools. Automated regression testing is common in large projects.",
      "A good regression suite covers the most important user paths and critical business functions.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A team adds a new payment method to an online store. After the change, they re-run all tests for cart, checkout, and order history.",
        "This ensures that the new payment method did not break existing payment features.",
      ],
    },
  },
  {
    id: "retesting",
    title: "Retesting",
    shortDescription: "Confirm that a reported defect is fixed.",
    content: [
      "Retesting is the process of testing a specific defect after it has been fixed to confirm it no longer exists.",
      "It focuses only on the failed test cases and the bug that was reported.",
      "Retesting is different from regression testing. Regression checks nearby areas, while retesting checks the exact fix.",
      "A defect is closed only when retesting shows the fix is working correctly.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester reports that the login button does not work on a mobile phone. The developer fixes it.",
        "The tester then tries the same steps on mobile to confirm the login button now works.",
      ],
    },
  },
  {
    id: "black-box-testing",
    title: "Black Box Testing",
    shortDescription: "Test without knowing the internal code.",
    content: [
      "Black box testing is a method where the tester checks the software without knowing how the internal code works.",
      "The tester focuses on inputs and outputs based on requirements and user expectations.",
      "This approach helps test the software from the user's point of view.",
      "It can be used for functional testing, system testing, and acceptance testing.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester enters a username and password on a login page without seeing the authentication code behind it.",
        "They only check that the correct username and password let the user in, and incorrect details show an error.",
      ],
    },
  },
  {
    id: "white-box-testing",
    title: "White Box Testing",
    shortDescription: "Test with knowledge of the internal code.",
    content: [
      "White box testing is a method where the tester knows the internal structure, design, and code of the application.",
      "It focuses on code paths, branches, loops, and conditions to make sure each part works correctly.",
      "This type of testing is usually done by developers because it requires programming knowledge.",
      "Common techniques include statement coverage, branch coverage, and path coverage.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A developer checks an if-else statement that gives a discount if age is over 65. They test the branch for age 70 and age 30.",
        "This ensures both conditions in the code are executed correctly.",
      ],
    },
  },
  {
    id: "gray-box-testing",
    title: "Gray Box Testing",
    shortDescription: "A mix of black box and white box testing.",
    content: [
      "Gray box testing combines black box and white box testing. The tester has limited knowledge of the internal system.",
      "This helps the tester design better test cases based on understanding of the architecture or database.",
      "It is useful for testing integration, security, and database-related issues.",
      "Gray box testing balances user-focused testing with some technical insight.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester knows the database structure of an e-commerce app. They test the checkout process and check that the order is saved correctly.",
        "They do not need to read all the code, but they understand enough to find data-related defects.",
      ],
    },
  },
  {
    id: "test-scenario",
    title: "Test Scenario",
    shortDescription: "High-level situations that need to be tested.",
    content: [
      "A test scenario is a high-level description of a situation or functionality that needs to be tested.",
      "It is usually a single line or statement that describes what the tester should verify.",
      "One test scenario can contain many detailed test cases.",
      "Test scenarios help testers understand the overall testing coverage without writing too many details.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Test scenario: 'Verify that a user can complete a purchase on the website.'",
        "This scenario includes test cases for login, search, add to cart, payment, and order confirmation.",
      ],
    },
  },
  {
    id: "test-case",
    title: "Test Case",
    shortDescription: "Detailed steps to verify a specific condition.",
    content: [
      "A test case is a detailed document that describes how to test a specific condition or function.",
      "A good test case includes: test ID, description, preconditions, steps, expected result, actual result, and status.",
      "Test cases help testers perform the same test consistently and share results clearly with the team.",
      "They are the foundation of manual and automated testing.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Test case: Login with valid username and password.",
        "Step 1: Open the login page. Step 2: Enter valid username. Step 3: Enter valid password. Step 4: Click Login.",
        "Expected result: The user is taken to the dashboard.",
      ],
    },
  },
  {
    id: "test-data",
    title: "Test Data",
    shortDescription: "Inputs used to execute test cases.",
    content: [
      "Test data is the information or input used to execute test cases.",
      "Good test data includes valid values, invalid values, boundary values, and special cases.",
      "Using the right test data helps find defects that might not appear with normal input.",
      "Test data should be prepared before testing starts and should be realistic.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "For an age input field that accepts 18 to 60, test data can be 25 (valid), 17 (invalid), 60 (boundary), and 'abc' (wrong type).",
        "Each value checks a different behavior of the input field.",
      ],
    },
  },
  {
    id: "bug-reporting",
    title: "Bug Reporting",
    shortDescription: "Document defects clearly so they can be fixed.",
    content: [
      "Bug reporting is the process of documenting a defect found during testing so that developers can fix it.",
      "A good bug report is clear, detailed, and easy to reproduce. It should include a title, description, steps, expected result, and actual result.",
      "Screenshots, videos, and logs make a bug report much more useful.",
      "A well-written bug report saves time for both testers and developers.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Title: Login button not responding on mobile.",
        "Steps: Open the login page on iPhone. Enter username and password. Tap the Login button.",
        "Expected result: User is logged in. Actual result: Nothing happens when the button is tapped.",
      ],
    },
  },
  {
    id: "bug-life-cycle",
    title: "Bug Life Cycle",
    shortDescription: "The stages a bug goes through from discovery to closure.",
    content: [
      "The bug life cycle is the set of stages a bug goes through from when it is found until it is closed.",
      "Common stages are: New, Assigned, Open, Fixed, Retest, Verified, Closed, and Reopen.",
      "When a tester finds a bug, it is marked as New. A lead or manager assigns it to a developer.",
      "After the developer fixes it, the tester retests the bug. If the fix works, the bug is Closed. If not, it is Reopened.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester reports that the search bar returns no results. The bug is assigned to a developer.",
        "The developer fixes it. The tester verifies and closes the bug. Later, the issue returns, so the bug is reopened.",
      ],
    },
  },
  {
    id: "severity-and-priority",
    title: "Severity and Priority",
    shortDescription: "Classify bugs by impact and urgency.",
    content: [
      "Severity describes how much a bug affects the system. Common levels are Critical, Major, Minor, and Trivial.",
      "Priority describes how soon a bug should be fixed. Common levels are High, Medium, and Low.",
      "A crash that stops all users is high severity and high priority. A typo on a hidden page is low severity and low priority.",
      "Severity and priority help teams decide which bugs to fix first.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A bug that prevents users from making a payment is high severity and high priority.",
        "A small color mistake on the footer of an admin page is low severity and low priority.",
      ],
    },
  },
  {
    id: "equivalence-partitioning",
    title: "Equivalence Partitioning",
    shortDescription: "Group input data into classes for efficient testing.",
    content: [
      "Equivalence partitioning is a technique that divides input data into groups or partitions that should be treated the same way by the system.",
      "Testers pick one value from each partition instead of testing every possible value.",
      "This reduces the number of test cases while still providing good coverage.",
      "Partitions are usually divided into valid classes and invalid classes.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "An age field accepts values from 18 to 60. Valid partition: 25. Invalid partitions: 10 and 70.",
        "Testing one value from each partition is enough because the system should treat all values in the same class equally.",
      ],
    },
  },
  {
    id: "boundary-value-analysis",
    title: "Boundary Value Analysis",
    shortDescription: "Test the edges of input ranges.",
    content: [
      "Boundary value analysis is a testing technique that focuses on the boundaries or edges of input ranges.",
      "Many defects occur at boundaries because developers often make mistakes with limits like minimum and maximum values.",
      "Testers check values at the boundary, just below it, and just above it.",
      "This technique is often used together with equivalence partitioning.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "An age field accepts values from 18 to 60. Boundary values to test are 17, 18, 60, and 61.",
        "These values are likely to reveal off-by-one errors in the code.",
      ],
    },
  },
  {
    id: "api-testing-basics",
    title: "API Testing Basics",
    shortDescription: "Test how applications communicate through APIs.",
    content: [
      "API testing checks that application programming interfaces work correctly.",
      "It focuses on request and response messages, status codes, data format, and behavior.",
      "APIs allow different software systems to communicate with each other.",
      "Testing APIs is important because many modern applications use APIs to send and receive data.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A weather app sends a GET request to an API to get the current temperature.",
        "API testing checks that the response returns the correct city, temperature, and status code 200.",
      ],
    },
  },
  {
    id: "postman-basics",
    title: "Postman Basics",
    shortDescription: "Learn the popular tool for API testing.",
    content: [
      "Postman is a popular tool used by testers and developers to test APIs.",
      "It allows users to send different types of requests such as GET, POST, PUT, and DELETE.",
      "Postman can save requests into collections, organize tests, and run automated test suites.",
      "It is beginner-friendly and widely used in the software industry.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester uses Postman to send a POST request to create a new user account.",
        "They check that the response contains the new user ID and a success status code.",
      ],
    },
  },
  {
    id: "jira-basics",
    title: "Jira Basics",
    shortDescription: "Track bugs and tasks with Jira.",
    content: [
      "Jira is a project management tool commonly used to track bugs, tasks, and development work.",
      "Testers use Jira to report bugs, assign them to developers, and track their status.",
      "Jira supports workflows, dashboards, and reports that help teams stay organized.",
      "It is widely used in agile and software development teams.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "A tester finds a bug and creates a ticket in Jira with a title, description, and screenshots.",
        "The ticket is assigned to a developer, who updates the status when the bug is fixed.",
      ],
    },
  },
  {
    id: "requirement-traceability-matrix",
    title: "Requirement Traceability Matrix (RTM)",
    shortDescription: "Link requirements to test cases for full coverage.",
    content: [
      "A Requirement Traceability Matrix, or RTM, is a document that links requirements to their related test cases.",
      "It helps teams make sure every requirement has been tested and nothing is missed.",
      "The matrix usually shows requirement IDs, test case IDs, and their status.",
      "RTM is useful during audits and when planning regression testing.",
    ],
    example: {
      title: "Real-world example",
      points: [
        "Requirement R1 says users must be able to log in. The RTM maps R1 to test cases TC1, TC2, and TC3.",
        "TC1 tests valid login, TC2 tests invalid password, and TC3 tests locked account behavior.",
      ],
    },
  },
];

export function getTopicById(id: string): QATopic | undefined {
  return qaTopics.find((topic) => topic.id === id);
}

export function getTopicIndexById(id: string): number {
  return qaTopics.findIndex((topic) => topic.id === id);
}
