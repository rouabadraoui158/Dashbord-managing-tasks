import React, { useState } from 'react';

const Task = ({ task, updateTask, deleteTask }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    updateTask(editedTask);
    setIsEditing(false);
  };

  return (
    <div className="task-card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleEditChange}
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleEditChange}
          ></textarea>
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate}
            onChange={handleEditChange}
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleEditChange}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          {showDetails && (
            <div className="task-details">
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
              <p>Priority: {task.priority}</p>
            </div>
          )}
          <button onClick={handleToggleDetails}>
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;
