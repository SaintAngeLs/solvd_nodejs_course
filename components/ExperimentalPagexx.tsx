import React, { useState } from 'react';
import { task13_szef_test_runner  as runTestsTask13} from '@/tasks/task13/test/test_run';



export const tasks = [
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
    number: 13, 
    name: 'myJSONParse function', 
    assignmentDate: 'Bardzo bardzo dawno temu... :(', 
    deadline: 'Wtorek', 
    solution: 'SWas implemented only in the TDD' 
  },
 

   
];


const TaskList = ({ activeTask, setActiveTask }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
      <ul>
        {tasks.map(task => (
          <li 
            key={task.number} 
            className={`my-2 cursor-pointer p-2 transition duration-300 ease-in-out hover:bg-blue-100 hover:text-blue-600 ${activeTask?.number === task.number ? 'bg-blue-300' : ''}`}
            onClick={() => setActiveTask(task)}
          >
            {task.number}. {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};



const LeftControls = ({ toggleSolutionVisibility, toggleNotesVisibility, runTests }) => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleSolutionVisibility}
      >
        Toggle Solution
      </button>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleNotesVisibility}
      >
        Toggle Notes
      </button>
      <button 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={runTests}
      >
        Run tests
      </button>
      {/* You can add more buttons here as needed */}
    </div>
  );
};
const RightDisplay = ({ activeTask, showSolution, showNotes, showTests, testResults }) => {
  return (
    <div className="w-3/4 bg-gray-100 p-4">
      {activeTask && <div><strong>{activeTask.name}</strong></div>}
      {activeTask && <div>Assigned: {activeTask.assignmentDate}</div>}
      {activeTask && <div>Deadline: {activeTask.deadline}</div>}
      {showSolution && activeTask && <div className="p-4 border border-gray-300">{activeTask.solution}</div>}
      {showNotes && activeTask && <div className="p-4 mt-4 border border-gray-300">{activeTask.notes}</div>}
      {showTests && <div className="p-4 mt-4 border border-red-300">Test Results Here</div>}

      {showTests && testResults && (
        <div className="p-4 mt-4 border border-red-300">
          <strong>Test Results for Task {activeTask.number}:</strong>
          <ul className="test-results-list text-left text-sm">
            {testResults.map((result, index) => (
              <li
                key={index}
                className={`border-b border-gray-300 pb-2 mb-2 ${result.success ? 'bg-green-200' : 'bg-red-200'}`}
              >
                <strong>Test Number:</strong> {result.testNumber}
                <br />
                <strong>Test Name:</strong> {result.testName}
                <br />
                <strong>Success:</strong> {result.success ? 'Yes' : 'No'}
                <br />
                <strong>Error:</strong> {result.error ? result.error : 'None'}
                <br />
                <strong>Output:</strong> {JSON.stringify(result.output)}
                <br />
                <strong>Execution Time:</strong> {result.executionTime} ms
              </li>
            ))}
          </ul>
        </div>
      )}
 
    </div>
  );
};

const ExperimentalTasksAndSolutionsxx = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showTests, setShowTests] = useState(false);
  const [activeTask, setActiveTask] = useState(null); 
  const [testResults, setTestResults] = useState({});


  const toggleSolutionVisibility = () => {
    setShowSolution(!showSolution);
  };

  const toggleNotesVisibility = () => {
    setShowNotes(!showNotes);
  };

 

  const runTestsForTask = (taskNumber) => {
    // Determine which test runner to use

    if (taskNumber === 13) {
      const results = runTestsTask13(); 
      setTestResults({ ...testResults, [taskNumber]: results });
    }
  }

  const runTests = () => {
    if (activeTask) {
      runTestsForTask(activeTask.number);
      setShowTests(true);
    }
  };

  return (
    <div className="flex h-screen">
      <TaskList activeTask={activeTask} setActiveTask={setActiveTask} />
      <LeftControls
        toggleSolutionVisibility={toggleSolutionVisibility}
        toggleNotesVisibility={toggleNotesVisibility}
        runTests={runTests}
      />
     <RightDisplay
                  activeTask={activeTask} 
                  showSolution={showSolution} 
                  showNotes={showNotes} 
                  showTests={showTests} 
                  testResults={testResults[activeTask?.number]} />
    </div>
  );
};

export default ExperimentalTasksAndSolutionsxx;