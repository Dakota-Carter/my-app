import Image from "next/image"
import Link from "next/link"
import styles from "../../../styles/Layout1.module.css"

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navsitelogo}>
        <Link href="/">
          <Image
            src="/navIcons/test-logo.png"
            alt="Some SEO description (for blind/read-aloud people)"
            layout="fill"
            objectFit="scale-down"
          />
        </Link>
      </div>

      <ul className={styles.navbar_nav}>{props.children}</ul>
    </nav>
  )
}

export default Navbar
