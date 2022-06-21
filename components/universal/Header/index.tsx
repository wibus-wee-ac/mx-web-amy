import { Eyes } from "@icon-park/react";
import { FC } from "react";
import classNames from 'clsx'
import styles from "./index.module.css";
import Link from "next/link";
import QueueAnim from "rc-queue-anim";
import TextyAnim from "rc-texty";
import { message } from "react-message-popup";

export const Header: FC<any> = (props) => {
  return (
    <header className="flex-shrink border-b bg-white border-primary-200 relative">
      <div className="banner">
        <img src="https://aboke.net/usr/themes/A-My/src/img/1.webp" alt="banner" className="w-full h-48 md:h-72 object-cover" />
        {/* <div className="w-full h-48 md:h-72 object-cover"></div> */}
      </div>
      <div className="container flex items-center px-3 py-3 mx-auto absolute bottom-12">
        <div className="flex items-end sm:flex-row">
          <a className="w-20 h-20 sm:w-24 sm:h-24 flex items-start text-primary-700 mr-5 hover:text-secondary-600" href="">
            <img className="rounded-md border-4 border-white" src="https://q1.qlogo.cn/g?b=qq&nk=1596355173&s=640" alt="tx" width="96" height="96" />
          </a>
          <div className="leading-loose">
            <h3 className="text-white font-bold text-2xl tracking-wider">
              Wibus
              </h3>
            <div id="typed-strings" className="mt-2">
              <span>
                Just Uaeua
                </span>
            </div>
            <span id="typed" className="header-status" style={{ marginTop: "1rem" }}></span>

          </div>
        </div>

        <div className="preview absolute top-4 sm:top-8 right-6 text-center">
          <div className="tips--left flex items-center" aria-label="浏览量">
            <Eyes theme="two-tone" size="19" fill={['#333', '#16ecec']} />
            <span className="text-white ml-2">123</span>
          </div>
        </div>

      </div>
      <div className="h-8"></div>
      <div className={classNames(styles.headerNav, "container flex items-center justify-between px-3 py-3 mx-auto sticky-header")}>
        <ul className="w-full flex flex-nowrap overflow-auto overflow-y-hidden cursor-move whitespace-no-wrap">
          <li className="pjax px-3 py-1 bg-[#f1f3fa] rounded border-b border-color">
            {/* <a href="">首页</a> */}
            <Link href="/">首页</Link>
          </li>
          <li className={classNames("pjax px-3 py-1", styles.submenu)}>
            <a href="">分类</a>
            <ul className={classNames(styles.submenu_category, "rounded bg-[#fff]")}>
              {
                props.categories.map((item: any, index: number) => {
                  return (
                    <li key={index}>
                      <div className="category-parent relative">
                        <a href="">{item.name}</a>
                      </div>
                    </li>
                  )
                })
              }

            </ul>
          </li>

          <li className="pjax px-3 py-1">
            <a target="_blank" rel="noopener" title="" href=""></a>
          </li>


        </ul>
      </div>
    </header>
  )
}