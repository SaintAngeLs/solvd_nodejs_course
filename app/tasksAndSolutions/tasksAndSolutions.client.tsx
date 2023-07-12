import React, { useState } from 'react';
import TableComponent from '@/components/TableComponent';

const TasksAndSolutions = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const toggleSolutionVisibility = () => {
    setShowSolution(!showSolution);
  };

  const toggleNotesVisibility = () => {
    setShowNotes(!showNotes);
  };

  return (
    <TableComponent
      showSolution={showSolution}
      showNotes={showNotes}
      toggleSolutionVisibility={toggleSolutionVisibility}
      toggleNotesVisibility={toggleNotesVisibility}
    />
  );
};

export default TasksAndSolutions;
