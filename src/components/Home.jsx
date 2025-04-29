import React, { useState } from 'react'
import logo from './assets/logo.png'
import styles from './Home.module.css'

import { PlusCircle } from "@phosphor-icons/react";

export default function Home() {
  // States
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Prevents adding empty task
    if (newTaskText.trim() === '')
      return;

    const newTask = {
      id: Date.now(),
      content: newTaskText,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);

    // Clear the input field
    setNewTaskText('');
  }

  // Function to handle user's input
  const handleInputChange = (e) => {
    setNewTaskText(e.target.value);
  }

  // Count tasks completed
  const completedTasksCount = tasks.filter(tasks => tasks.isCompleted).length;

  return (
    <div>
      {/* Header with logo */}
      <header className={styles.headerContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo todo"
        />
      </header>

      {/* Input and AddButton section */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder='Add a new task'
          className={styles.taskInput}
          value={newTaskText}
          onChange={handleInputChange}
        />

        <button
          className={styles.addButton}
          onClick={handleAddTask}
        >
          Add
          <PlusCircle size={16} />
        </button>
      </div>

      {/* Tasks Display */}
      <div>
        <section className={styles.pSection}>
          <p className={styles.firstP}>
            All Tasks
            <span>{tasks.length}</span>
          </p>
          <p className={styles.secondP}>
            Done
            <span>{completedTasksCount}</span>
          </p>
        </section>
      </div>

      <div className={styles.tasksList}>
        {tasks.map(task => (
          <div key={task.id} className={styles.taskItem}>{task.content}</div>
        ))}
      </div>
    </div>
  )
}
