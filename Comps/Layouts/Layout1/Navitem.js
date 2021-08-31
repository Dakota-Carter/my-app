import React, { useState } from "react"
import styles from "../../../styles/Layout1.module.css"

const Navitem = (props) => {
  const [open, setOpen] = useState(false)

  return (
    <li className={styles.nav_item}>
      <a href="#" className={styles.icon_button} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

export default Navitem
