import React, { useState } from 'react';
import Button from './Button'
import './css/AddTask.css';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  }

  return ( 
    <div className='add-task-container'>
      <input 
        onChange={handleInputChange}
        value={inputData}
        className='add-task-input'
        type="text"
      />

      <div className="button-add-container">
        <Button onClick={handleTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
}
 
export default AddTask;