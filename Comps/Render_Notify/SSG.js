import styles from "../../styles/render_methods.module.css"

const SSG = () => {
  return (
    <div className={styles.wrapper}>
      Page Type:
      <div className={styles.animation}>STATIC; Generated at build.</div>
      <div className={styles.footer}>Can be served with a CDN.</div>
      <div className={styles.footer2}>**Animated with pure CSS</div>
    </div>
  )
}

export default SSG
