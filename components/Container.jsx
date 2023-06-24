import styles, { layout } from "../styles/styles";

export function Container({ className, ...props }) {
    return (
      <div
        className={styles.container}
        {...props}
      />
    )
  }