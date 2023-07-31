export interface TestCase {
    testName: string;
    input: any;
    expectedOutput: any;
  }

  export interface TestResult {
    testName: string;
    input: any;
    expectedOutput: any;
    receivedOutput: any;
    testPassed: boolean;
  }