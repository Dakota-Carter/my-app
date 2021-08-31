import styles from "../../../styles/Layout1.module.css"

const Dropdownitems = (props) => {
  return (
    <>
      <a href="#" className={styles.menu_item}></a>
      <span className={styles.icon_button}>{props.leftIcon}</span>
      {props.children}
      <span className={styles.icon_right}>{props.rightIcon}</span>
    </>
  )
}

export default Dropdownitems
