import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';

import './css/Task.css';

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
  return (
    <div
      className='task-container'
      style={task.completed ? {borderLeft: '6px solid rgb(0, 218, 199)'} : {} } // status done
    >
      <div className='task-title' onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className='buttons-container'>
        <button
          className='remove-task-button'
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose/>
        </button>

        <button
          className='info-task-button'
        >
          <CgInfo/>
        </button>
      </div>
    </div>
  )

  // return <div className='task-container'>{task.title}</div>;
};

export default Task;