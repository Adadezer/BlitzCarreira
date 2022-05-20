import React from 'react';

import './css/Task.css';

const Task = ({task}) => {
  return (
    <div className='task-container'>
      <div className='task-id'>
        {task.id}
      </div>
      <div className='task-descricao'>
        {task.descricao}
      </div>
      <div className='task-status'>
        {task.status}
      </div>
      <div className='task-createdAt'>
        {task.createdAt}
      </div>
    </div>
  );
};

export default Task;