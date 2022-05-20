import React from 'react';
// import {CgClose, CgInfo} from 'react-icons/cg';
// import {useHistory} from 'react-router-dom';

import './css/Task.css';

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
  // const history = useHistory();
  
  // const handleTaskDetailsClick = () => {
  //   history.push(`/${task.title}`);
  // };

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

// import React from 'react';
// import {CgClose, CgInfo} from 'react-icons/cg';
// import {useHistory} from 'react-router-dom';

// import './css/Task.css';

// const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
//   const history = useHistory();
  
//   const handleTaskDetailsClick = () => {
//     history.push(`/${task.title}`);
//   };

//   return (
//     <div
//       className='task-container'
//       style={task.completed ? {borderLeft: '6px solid rgb(0, 218, 199)'} : {} } // status done
//     >
//       <div className='task-title' onClick={() => handleTaskClick(task.id)}>
//         {task.title}
//       </div>

//       <div className='buttons-container'>
//         <button
//           className='remove-task-button'
//           onClick={() => handleTaskDeletion(task.id)}
//         >
//           <CgClose />
//         </button>
//         <button
//           className='info-task-button'
//           onClick={handleTaskDetailsClick}
//         >
//           <CgInfo />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Task;