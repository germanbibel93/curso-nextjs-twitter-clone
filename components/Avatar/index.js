import styles from "./styles.module.css"

export default function Avatar({ alt, src, text, withText }) {
  const className = `
    ${styles.avatar}
    ${withText ? styles.avatarWithText : null}
  `

  return (
    <>
      <div className={styles.container}>
        <img className={className} alt={alt} title={alt} src={src} />
        {withText && <strong>{text || alt}</strong>}
      </div>
    </>
  )
}
