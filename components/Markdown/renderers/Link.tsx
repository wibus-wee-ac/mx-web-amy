import Router from 'next/router'
import { FC, useCallback } from 'react'
import styles from './index.module.css'
export const RenderLink: FC<{
  href: string
  key?: string
  children?: JSX.Element | JSX.Element[]
}> = ((props) => {
  const ExtendIcon = 
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width="15"
        height="15"
        className={'inline align-middle leading-normal'}
      >
        <path
          fill="#fff"
          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
        ></path>
        <polygon
          fill="#fff"
          points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
        ></polygon>
      </svg>
    )
  const handleRedirect = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const href = props.href
      const locateUrl = new URL(location.href)

      const toUrlParser = new URL(href)

      if (
        toUrlParser.host === locateUrl.host ||
        (process.env.NODE_ENV === 'development' &&
          toUrlParser.host === 'iucky.cn')
      ) {
        e.preventDefault()
        const pathArr = toUrlParser.pathname.split('/').filter(Boolean)
        const headPath = pathArr[0]

        switch (headPath) {
          case 'posts': {
            Router.push('/posts/[category]/[slug]', toUrlParser.pathname)
            break
          }
          case 'notes': {
            Router.push('/notes/[id]', toUrlParser.pathname)
            break
          }
          case 'category': {
            Router.push('/category/[slug]', toUrlParser.pathname)
            break
          }
          default: {
            window.open(toUrlParser.pathname)
          }
        }
      }
    },
    [props.href],
  )

  return (
    <div className={styles['link']}>
      <a href={props.href} target={'_blank'} onClick={handleRedirect} rel="noreferrer">
        {props.children}
      </a>
      <div className={styles['popup']}>{props.href}</div>
      {ExtendIcon}
    </div>
  )
})
