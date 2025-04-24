import React from 'react'
import logo from './assets/logo.png'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div>
      <header className={styles.header_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="logo todo"
        />
      </header>

      <div>
        <input
          type="text"
          placeholder='Adicione uma nova tarefa'
          className={styles.body_input}
        />
      </div>

    </div>
  )
}
