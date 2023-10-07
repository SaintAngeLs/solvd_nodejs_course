import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';
import { runTestsTask1 } from '@/tasks/task1/test/task1_test';
import { tasks } from './TableComponent';

const Task1TableComponent = ({ showSolution, toggleSolutionVisibility, showNotes, toggleNotesVisibility }) => {
    const [loading, setLoading] = useState(false);
    const [testResults1, setTestResults1] = useState([]);

    const runTestsForTask1 = () => {
        setLoading(true);
        const results = runTestsTask1();
        setTestResults1(results);
        setLoading(false);
    };

    const task1 = tasks.find(t => t.number === 1);

    return (
        <div>
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
                    <tr>
                        <td>{task1.number}</td>
                        <td>{task1.name}</td>
                        <td>{task1.assignmentDate}</td>
                        <td>{task1.deadline}</td>
                        <td>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-1 hover:bg-blue-600 transition-colors"
                                onClick={toggleSolutionVisibility}
                            >
                                {showSolution ? 'Hide Solution' : 'Show Solution'}
                            </button>
                        </td>
                        <td>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-1 hover:bg-blue-600 transition-colors"
                                onClick={toggleNotesVisibility}
                            >
                                {showNotes ? 'Hide Notes' : 'Show Notes'}
                            </button>
                        </td>
                    </tr>
                    {showSolution && (
                        <tr>
                            <td colSpan={6}>
                                Solution: {task1.solution}
                                <div>
                                    {loading ? (
                                        <BarLoader color={"#123abc"} height={50} width={100} loading={loading} />
                                    ) : (
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors"
                                            onClick={runTestsForTask1}
                                        >
                                            Run Tests for Task 1
                                        </button>
                                    )}
                                </div>
                            </td>
                        </tr>
                    )}
                    {showNotes && (
                        <tr>
                            <td colSpan={6}>
                                Notes for Task 1: {task1.notes}
                            </td>
                        </tr>
                    )}
                    {/* Here, you can add the logic to display test results1 similar to what you provided */}
                </tbody>
            </table>
        </div>
    );
};

export default Task1TableComponent;
