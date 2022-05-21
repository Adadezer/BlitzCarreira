import React from 'react';

import './css/Task.css';

const Task = ({task, numLinha}) => {
  return (
    <div className='task-container'>
      <div className={numLinha < 9 ? 'task-numLinha': 'task-numLinha10'}>
        {numLinha + 1}
      </div>
      <div className='task-descricao'>
        {task.descricao}
      </div>
      <div 
        className={
          task.status === 'concluido' ? 'task-status-con'
            : task.status === 'em andamento' ? 'task-status-and'
            : 'task-status-pen'
        }
      >
        {task.status}
      </div>
      <div className='task-createdAt'>
        {task.createdAt.split('T', 1)}
      </div>
    </div>
  );
};

export default Task;