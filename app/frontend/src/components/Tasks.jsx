import React from 'react';
import Task from  './Task'

const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task, indice) => (
        <Task
          key={task.id}
          task={task}
          numLinha={indice}
        />
      ))}
    </>
  );
};

export default Tasks;