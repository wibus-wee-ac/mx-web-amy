import { FC } from "react";


export const Footer: FC<any> = (props) => {
  return (
    <footer className="flex-shrink h-auto mt-3 border-t border-primary-200 bg-white">
      <div className="container px-5 mx-auto">
        <nav className="mt-2">
          <ul className="inline-flex items-center flex-wrap">
            <li><a href="" target="_blank">NS-A-My</a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-between">
          <div className="flex flex-col mb-3 meta">
            <span className="mb-3">Just Uaeua</span>
            <div></div>
            <span>
              <span>Powered by <a target="_blank" href="http://www.typecho.org" rel="noreferrer">NextServer</a>&nbsp;|&nbsp;Theme by <a target="_blank" href="https://www.rz.sb/archives/1402/" rel="noreferrer">Rz-Sb</a> © 2022  Copyright </span>
            </span>

          </div>
          <div className="md:block">
            <div className="flex items-start rounded-md">
              <img className="rounded-md" src="https://q1.qlogo.cn/g?b=qq&nk=1596355173&s=640" width="50" height="50" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}