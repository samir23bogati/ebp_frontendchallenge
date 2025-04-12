import React, { useState } from 'react';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [message, setMessage] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      setMessage('Please enter a task.');
      return;
    }

    setTasks([
      ...tasks,
      { id: Date.now(), text: taskInput, completed: false },
    ]);
    setTaskInput('');
    setMessage('');
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-container">
      <h2>Task Manager</h2>
      <p>Your daily to do list</p>

      <div className="task-box">
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>❌ Delete</button>
          </div>
        ))}

        <input
          type="text"
          placeholder="Add new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="add-btn" onClick={handleAddTask}>
          Add Task
        </button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default TaskManager;
