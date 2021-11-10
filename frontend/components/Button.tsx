import styles from './Button.module.css'

interface Props {
  label: string
  action: () => void
}

const Button: React.FC<Props> = ({ label, action }) => {
  return (
    <button className={styles.button} onClick={action}>
      {label}
    </button>
  )
}

export default Button
