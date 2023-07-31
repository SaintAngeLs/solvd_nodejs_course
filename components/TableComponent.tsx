import { runTestsTask1 } from '@/tasks/task1/test/task1_test';
import { runTestsTask2 } from '@/tasks/task2/test/task2_test';
import { runTestsTask3 } from '@/tasks/task3/test/task3_test';
import React, { useState } from 'react';


const tasks = [
  { 
    number: 1, 
    name: 'Task 1: pefroming the arighmetical oprations in the body of mathb{R} on the argument of string of the size n, n "\"in {N}"/"{0} n "\"in {[1, ... , k], k "\in"[1,..., 10^30, ... ,... <"\"infintity]}. The argument is arg_x := "phi_1 phi_2 ... phi_n" phi_i "\"in [0, 1, ..., k, ... < infinity]|mathb{N} U {0}' , assignmentDate: '2023-07-01', 
    deadline: '2023-07-15', 
    solution: 'Solution 1',  
    notes: 'Ask about the tridiagonal systems Ax=b',
  },
  { 
    number: 2, 
    name: 'Task 2: A JavaScript library that provides advanced data transformation functions.', 
    assignmentDate: '2023-07-05', 
    deadline: '2023-07-20', 
    solution: 'Solution 2' 
  },
  { 
    number: 3, 
    name: '{}', 
    assignmentDate: '2023-07-05', 
    deadline: '2023-07-20', 
    solution: 'Solution 3' 
  },

  // TASK_3, ..., TASK_N
  
];

const TableComponent = ({ showSolution, showNotes, toggleSolutionVisibility, toggleNotesVisibility }) => {
  const [testResults1, setTestResults1] = useState([]);
  const [testResults2, setTestResults2] = useState([]);
  const [testResults3, setTestResults3] = useState([]);


  const runTestsAndStoreResults = (taskNumber) => {
    let testResults = [];
    if (taskNumber === 1) {
      testResults = runTestsTask1();
      setTestResults1(testResults);
    } else if (taskNumber === 2) {
      testResults = runTestsTask2();
      setTestResults2(testResults);
    } else if (taskNumber === 3){
      testResults = runTestsTask3();
      setTestResults3(testResults);
    }
  };

  const clearTestResults = () => {
    setTestResults1([]);
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
                      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors" onClick={() => runTestsAndStoreResults(task.number)}>Run Tests</button>
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
              {task.number === 1 && testResults1.length > 0 && (
                <tr>
                  <td colSpan={6}>
                    <div>
                      <strong>Test Results for Task {task.number}:</strong>
                    </div>
                    <ul className="test-results-list text-left text-sm">
                      {testResults1.map((result, index) => {
    
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

              {task.number === 2 && testResults2.length > 0 && (
                 <tr>
                 <td colSpan={6}>
                   <div>
                     <strong>Test Results for Task {task.number}:</strong>
                   </div>
                   <ul className="test-results-list text-left text-sm">
                     {testResults2.map((result, index) => {
                       const isResultErrorFree = result.testPassed;
                       console.log("isResultErrorFree", isResultErrorFree)
                       return (
                         <li
                           key={index}
                           className={`border-b border-gray-300 pb-2 mb-2 ${isResultErrorFree ? 'bg-green-200' : 'bg-red-200'}`}
                         >
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
              )}

              {task.number === 3 && testResults3.length > 0 && (
                 <tr>
                 <td colSpan={6}>
                   <div>
                     <strong>Test Results for Task {task.number}:</strong>
                   </div>
                   <ul className="test-results-list text-left text-sm">
                     {testResults3.map((result, index) => {
                       const isResultErrorFree = result.testPassed;
                       console.log("isResultErrorFree", isResultErrorFree)
                       return (
                         <li
                           key={index}
                           className={`border-b border-gray-300 pb-2 mb-2 ${isResultErrorFree ? 'bg-green-200' : 'bg-red-200'}`}
                         >
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
              )}
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default TableComponent;
