/*
 * @FilePath: /effective-octo-meme/components/universal/Transition/base.tsx
 * @author: Wibus
 * @Date: 2022-05-04 11:35:21
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-04 11:35:21
 * Coding With IU
 */
import { FC } from 'react'
import { Transition } from 'react-transition-group'
import { TransitionProps } from 'react-transition-group/Transition'

export interface BaseTransitionViewProps {
  id?: string
  className?: string
}

export const BaseTransitionView: (
  defaultStyle: any,
  transitionStyles: any,
) => FC<BaseTransitionViewProps & Partial<TransitionProps>> =
  (defaultStyle, transitionStyles) => (props) => {
    const { id, className, ...rest } = props
    return (
      <Transition
        key={id}
        in
        appear
        mountOnEnter
        unmountOnExit
        timeout={0}
        {...rest}
      >
        {(state) => {
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={className}
            >
              {props.children}
            </div>
          )
        }}
      </Transition>
    )
  }
