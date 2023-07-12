'use client'

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/server';
import TasksAndSolutions from './tasksAndSolutions.client';
import TableComponent from '@/components/TableComponent';
import Title from '@/components/Title';

function Page() {
  const [showSolution, setShowSolution] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const toggleSolutionVisibility = () => {
    setShowSolution(!showSolution);
  };

  const toggleNotesVisibility = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div className = "p-10">  
      <Title/>
      <TableComponent
        showSolution={showSolution}
        showNotes={showNotes}
        toggleSolutionVisibility={toggleSolutionVisibility}
        toggleNotesVisibility={toggleNotesVisibility}
      />
    </div>  
    
    
  );
}

export default Page;
