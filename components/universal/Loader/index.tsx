/*
 * @FilePath: /ns-A-My/components/universal/Loader/index.tsx
 * @author: Wibus
 * @Date: 2022-05-15 19:46:30
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-15 19:53:37
 * Coding With IU
 */

import { FC, memo, useRef } from 'react'
import { CustomLogo } from './Logo';

const Loader: FC = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className="loader" ref={ref}></div>
      <div className="loader-logo">
        <CustomLogo
          className="animation"
          height="150px"
          onAnimationEnd={(e) => {
            ref.current?.remove()
            ;(e.target as any)?.remove()
          }}
        />
      </div>
    </>
  )
})

export default Loader
