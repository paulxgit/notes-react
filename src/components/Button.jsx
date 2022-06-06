import React from 'react'
import styles from '../styles/components/Button.module.css'

export function Button() {
  return <input type='submit' value='Add Note' className={styles.button} />
}
