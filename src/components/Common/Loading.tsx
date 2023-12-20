import styles from '../../../public/css/common/Loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.Loader}>
      <span className={styles.loader_spin}></span>
    </div>
  )
}

