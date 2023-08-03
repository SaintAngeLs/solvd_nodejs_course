export const TaskResults = ({testResults}) => {
    return (
      <tr>
        <td colSpan={6}>
          <div>
            <strong>Test Results for Task:</strong>
          </div>
          <ul className="test-results-list text-left text-sm">
            {testResults.map((result, index) => {
              // I've removed some code here for brevity. You can include the appropriate fields based on your needs.
              return (
                <li key={index}>
                  <strong>Test Name:</strong> {result.testName}
                  <br />
                  <strong>Input:</strong> {JSON.stringify(result.input)}
                  <br />
                  <strong>Expected Output:</strong> {JSON.stringify(result.expectedOutput)}
                  <br />
                  <strong>Received Output:</strong> {JSON.stringify(result.receivedOutput)}
                  <br />
                  <strong>Test Passed:</strong> {result.testPassed ? 'Passed' : 'Failed'}
                  <br />
                  <strong>Execution Time:</strong> {result.executionTime} ms
                </li>
              );
            })}
          </ul>
        </td>
      </tr>
    );
  };