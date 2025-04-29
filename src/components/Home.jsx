import React from 'react'
import logo from './assets/logo.png'
import styles from './Home.module.css'

import { PlusCircle } from "@phosphor-icons/react";

export default function Home() {
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

      {/* Start of the body */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder='Add a new task'
          className={styles.taskInput}
        />

        <button className={styles.addButton}>
          Add
          <PlusCircle size={16} />
        </button>
      </div>

      <div className={styles.tasksDisplay}>
        <section className={styles.pSection}>
          <p className={styles.firstP}>
            All Tasks
            <span>0</span>
          </p>
          <p className={styles.secondP}>
            Done
            <span>0</span>
          </p>
        </section>
      </div>

    </div>
  )
}
