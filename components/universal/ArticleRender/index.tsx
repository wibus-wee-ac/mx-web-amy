import { Comments, Eyes, ThumbsUp } from "@icon-park/react";
import { FC } from "react";
import styles from "./index.module.css";
import classNames from 'clsx'
import Router from "next/router";
import Link from "next/link";

export const ArticleRender: FC<any> = (props) => {
  return (

    <div className="news-item boxes sm:boxes mb-3 pt-2">
      <div className="mx-3 py-1" style={{letterSpacing: "1px"}}>
        <div className={classNames(styles.postThumbnailCustom, "flex mb-3 h-32 sm:h-48 relative rounded-md overflow-auto")} onClick={() => { Router.push(`/posts/${props.slug}/${props.path}`) }}>
          <img className="lazy w-full h-full rounded-md absolute object-cover object-center"
            // data-src=""
            src={props.thumbnail}
            alt="" />
          {/* <a href="" aria-label="" className={classNames(styles.articleHeeadlineP, "w-full flex items-center justify-center text-white hover:text-white font-bold md:text-2xl text-xl tracking-wider m-auto z-10")}> */}
            {/* <Link href={`/posts/${props.slug}/${props.path}`}> */}
            <span onClick={() => {Router.push(`/posts/${props.slug}/${props.path}`)}} className={classNames(styles.articleHeeadlineP, "w-full flex items-center justify-center text-white hover:text-white font-bold md:text-2xl text-xl tracking-wider m-auto z-10", "px-3")}>{props.title}</span>
            {/* </Link> */}
          {/* </a> */}
        </div>

        {/* <div className={classNames(styles.postEntryContent)}>
          <a href="" target="_self" aria-label="Read more"><p>阅读全文</p></a>
        </div> */}
      </div>
      <div className={classNames(styles.postBoxState)}>

        <div className={classNames(styles.postBoxStateBtns)} data-cid="">
          <ThumbsUp theme="two-tone" size="19" fill={['#333', '#16ecec']} /> <span>点赞 {props.thumbsUp}</span>
        </div>
        <a href="#comments" className={classNames(styles.postBoxStateBtns)} aria-label="comments">
          <Comments theme="two-tone" size="19" fill={['#333', '#16ecec']} /><span>评论 {props.comments}</span>
        </a>
        <div className={classNames(styles.postBoxStateBtns)}>
          <Eyes theme="two-tone" size="19" fill={['#333', '#16ecec']} /><span>浏览 {props.viewers}</span>
        </div>
      </div>
    </div>
  )
}