import React, { useState } from 'react';
import { runTests } from '../tasks/task1/test/task1_test';

const tasks = [
  { number: 1, name: 'Task 1', assignmentDate: '2023-07-01', deadline: '2023-07-15', solution: 'Solution 1',  notes: 'Ask about the tridiagonal systems Ax=b',},
  { number: 2, name: 'Task 2', assignmentDate: '2023-07-05', deadline: '2023-07-20', solution: 'Solution 2' },
  // Add more tasks as needed
];

const TableComponent = ({ showSolution, showNotes, toggleSolutionVisibility, toggleNotesVisibility }) => {
  const [testResults, setTestResults] = useState([]);


  const runTestsAndStoreResults = () => {
    const results = runTests();
    setTestResults(results);
  };

  const clearTestResults = () => {
    setTestResults([]);
  };

  return (
    <main className="flex min-h-screen flex-col p-10">
      <div>Tasks And Solutions</div>
      <div>
        <button className="bg-blue-500 mx-10 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors" onClick={toggleSolutionVisibility}>
          {showSolution ? 'Hide' : 'Show'} Solution
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors" onClick={toggleNotesVisibility}>
          {showNotes ? 'Hide' : 'Show'} Notes
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Task Number</th>
            <th>Task Name</th>
            <th>Assignment Date</th>
            <th>Deadline</th>
            <th>Solution</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <>
              <tr key={task.number}>
                <td>{task.number}</td>
                <td>{task.name}</td>
                <td>{task.assignmentDate}</td>
                <td>{task.deadline}</td>
                <td>
                  {showSolution ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors" onClick={() => {
                      toggleSolutionVisibility();
                      clearTestResults();
                    }}>Hide Solution</button>
                  ) : (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-1 hover:bg-blue-600 transition-colors" onClick={toggleSolutionVisibility}>Show Solution</button>
                  )}
                </td>
                <td>
                  {showNotes ? (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-1 hover:bg-blue-600 transition-colors" onClick={toggleNotesVisibility}>Hide Notes</button>
                  ) : (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mt-1 hover:bg-blue-600 transition-colors" onClick={toggleNotesVisibility}>Show Notes</button>
                  )}
                </td>
              </tr>
              {showSolution && (
                <tr>
                  <td className="table-hidden-td" colSpan={6}>
                    Solution: {task.solution}
                    <div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors" onClick={runTestsAndStoreResults}>Run Tests</button>
                    </div>
                  </td>
                </tr>
              )}
              {showNotes && (
                <tr className="table-hidden-tr">
                  <td className="table-hidden-td" colSpan={6}>
                    Notes for Task {task.number} : {task.notes}
                  </td>
                </tr>
              )}
              {task.number === 1 && testResults.length > 0 && (
                <tr>
                  <td colSpan={6}>
                    <div>
                      <strong>Test Results for Task {task.number}:</strong>
                    </div>
                    <ul className="test-results-list text-left text-sm">
                      {testResults.map((result, index) => {
    
                        const isResultErrorFree =
                            result.additionError < 0.05 &&
                            result.subtractionError < 0.05 &&
                            result.multiplicationError < 1 &&
                            result.divisionError < 0.05;
                    
                      return (
                        <li 
                            key={index} 
                            className={`
                                border-b border-gray-300
                                pb-2
                                mb-2
                                ${isResultErrorFree ? 'bg-green-200' : 'bg-red-200'}
                            `}>
                        <strong>Input:</strong> {result.input}<br/>
                       
                        <strong>Addition:</strong> {result.addition}<br/>
                        
                            <strong>Expected Addition:</strong> {result.expectedAddition}<br/>
                            <strong>Addition Error:</strong> <span className={result.additionError >= 0.05 ? 'text-red-600' : ''}>{result.additionError}</span><br/>
                            <strong>Addition Execution Time:</strong> {result.additionExecutionTime} ms<br/>  {/* Added line */}
                                    
                            <strong>Subtraction:</strong> {result.subtraction}<br/>
                            <strong>Expected Subtraction:</strong> {result.expectedSubtraction}<br/>
                            <strong>Subtraction Error:</strong> <span className={result.subtractionError >= 0.05 ? 'text-red-600' : ''}>{result.subtractionError}</span><br/>
                            <strong>Subtraction Execution Time:</strong> {result.subtractionExecutionTime} ms<br/>  {/* Added line */}
                                    
                            <strong>Multiplication:</strong> {result.multiplication}<br/>
                            <strong>Expected Multiplication:</strong> {result.expectedMultiplication}<br/>
                            <strong>Multiplication Error:</strong> <span className={result.multiplicationError >= 1 ? 'text-red-600' : ''}>{result.multiplicationError}</span><br/>
                            <strong>Multiplication Execution Time:</strong> {result.multiplicationExecutionTime} ms<br/>  {/* Added line */}
                                    
                                        
                            <strong>Division:</strong> {result.division}<br/>
                            <strong>Expected Division:</strong> {result.expectedDivision}<br/>
                            <strong>Division Error:</strong> <span className={result.divisionError >= 0.05 ? 'text-red-600' : ''}>{result.divisionError}</span><br/>
                            <strong>Division Execution Time:</strong> {result.divisionExecutionTime} ms<br/>  {/* Added line */}
                            </li>

                        )})}
                    </ul>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TableComponent;
