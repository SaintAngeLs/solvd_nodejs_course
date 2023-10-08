import React, { useState } from 'react';
import TableComponent from '@/components/TableComponent';
import ExperimentalTasksAndSolutionsxx from '@/components/ExperimentalPagexx';

const ExperimentalTasksAndSolutions = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const toggleSolutionVisibility = () => {
    setShowSolution(!showSolution);
  };

  const toggleNotesVisibility = () => {
    setShowNotes(!showNotes);
  };

  return (
    
    <ExperimentalTasksAndSolutionsxx/>
  );
};

export default ExperimentalTasksAndSolutions;
