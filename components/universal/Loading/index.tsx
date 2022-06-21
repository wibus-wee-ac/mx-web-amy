import { FC } from "react";
import classNames from "clsx"
import styles from "./index.module.css"
export const Loading: FC<
  {
    isLoading?: boolean
  }
> = (props) => {
  console.log(props);
  return (
    <div className={props.isLoading ? classNames(styles.mask, "") : classNames(styles.mask, "hidden")}>
      <div className={classNames(styles.loading, "")}>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
        <div className={classNames(styles.obj, "")}></div>
      </div>
    </div>
  )
}