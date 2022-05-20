import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  const  [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      const { data } = await axios.get('http://localhost:3001/todo');
      console.log('linha 30', data);
      setTasks(data);
    }

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed};
      return task;
    });

    setTasks(newTask);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks,{
        id: uuidv4(),
        title: taskTitle,
        status: 'pendende',
        createdAt: ''
      },
    ];
    setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId );

    setTasks(newTasks);
  }
  
  return (
		<Router>
			<div className="container">
				<Header />
				<Route
					path="/"
					exact
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								handleTaskDeletion={handleTaskDeletion}
							/>
						</>
					)}
				/>
        <Route path="/:taskTitle" exact component={TaskDetails} />
			</div>
		</Router>
	);
};

export default App;
