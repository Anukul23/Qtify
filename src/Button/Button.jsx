import React from 'react'
import styles from "./Button.module.css"
const button = ({children}) => {
  return (
    <div>
      <button className={styles.btn} type='submit'>{children}</button>
    </div>
  )
}

export default button
