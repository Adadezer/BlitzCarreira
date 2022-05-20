import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

import './App.css';

const App = () => {
  const  [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('http://localhost:3001/todo');

      setTasks(data);
    }

    fetchTasks();
  }, []);

  const handleTaskAddition = () => {
    const newTask = [...tasks,{
        id: '2',
        descricao: 'hard code',
        status: 'pendente',
        createdAt: 'data'
      },
    ];
    setTasks(newTask);
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
							/>
						</>
					)}
				/>
			</div>
		</Router>
	);
};

export default App;
