import Navbar from "./Navbar"
import Navitem from "./Navitem"

import MenuIconArrowD from "../../../public/navIcons/caret-down-fill.svg"
import Navdropdownmenu from "./Navdropdownmenu"

const Layout1 = ({ children }) => {
  return (
    <div classname="content">
      <Navbar>
        <Navitem icon="😇" />
        <Navitem icon="😃" />
        <Navitem icon={<MenuIconArrowD />}>
          <Navdropdownmenu></Navdropdownmenu>
        </Navitem>
      </Navbar>
      {children}
    </div>
  )
}

export default Layout1
