import styles from "../../../styles/Layout1.module.css"
import Dropdownitems from "./Navdropdownitems"

const Dropdownmenu = () => {
  const Dropdownitems = (props) => {
    return (
      <>
        <a href={props.to} className={styles.menu_item}>
          <span className={styles.icon_button}>{props.leftIcon}</span>
          {props.children}
          <span className={styles.icon_right}>{props.rightIcon}</span>
        </a>
      </>
    )
  }

  //export default dropdown

  return (
    <div className={styles.dropdown}>
      <Dropdownitems>1</Dropdownitems>
      <Dropdownitems>2</Dropdownitems>
    </div>
  )
}

export default Dropdownmenu
