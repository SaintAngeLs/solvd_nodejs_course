'use client'

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom/server';
import experimentalTasksAndSolutions from './experimentalTasksAndSolutions.client';
import TableComponent from '@/components/TableComponent';
import Title from '@/components/Title';
import ExperimentalTasksAndSolutionsxx from './experimentalTasksAndSolutions.client';

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
      <ExperimentalTasksAndSolutionsxx/>
        
      
    </div>  
    
    
  );
}

export default Page;
