import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title !== '' && description !== '' && priority !== '' && dueDate !== '') {
      addTask({ title, description, priority, dueDate, status: 'In Progress' });
      alert('Task added successfully');
      setTitle('');
      setDescription('');
      setPriority('Medium');
      setDueDate('');
    } else {
      alert('Please fill the empty fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Task</h1>
      <input
        type='text'
        value={title}
        placeholder='Add task title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />

      <input
        type='text'
        value={description}
        placeholder='Task description'
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <br /><br />

      <input
        type='date'
        value={dueDate}
        placeholder='Enter task date'
        onChange={(e) => setDueDate(e.target.value)}
      />
      <br /><br />

      <button type='submit'>Add</button>
    </form>
  );
}

export default TaskForm;
