import { FC } from "react";
import styles from "./index.module.css";
import classNames from "clsx";
import Router from "next/router";
import Link from "next/link";
export const Paginations: FC<{
  currentPage: number
  totalPage: number
}> = (props) => {

  return (
    <div>
      <div className="boxes sm:box">
        <div className="w-full flex p-3">
          <div style={{flex: 1, marginTop: 10}}>
            <span>第 {props.currentPage} 页</span>
          </div>
          <div className={classNames(styles.next)}>
            
            
            { props.currentPage !== 1 ? (
              <Link href={`/?page=${props.currentPage - 1}`}>
              上一页
              </Link>
            ) : null }

            { props.currentPage !== props.totalPage ? (
            <Link href={`/?page=${props.currentPage + 1}`}>
            下一页
            </Link>
            ) : null }


          </div>
        </div>
      </div>
    </div>
  )
}