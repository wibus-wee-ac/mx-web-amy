/*
 * @FilePath: /ns-A-My/components/universal/Transition/bottom-up.tsx
 * @author: Wibus
 * @Date: 2022-05-04 11:34:51
 * @LastEditors: Wibus
 * @LastEditTime: 2022-05-15 16:38:03
 * Coding With IU
 */
import { FC } from 'react'
import { TransitionProps } from 'react-transition-group/Transition'
import { genSpringKeyframes } from '../../../utils/spring'
import { BaseTransitionView, BaseTransitionViewProps } from './base'

const name = `bottom-up-spring`
genSpringKeyframes(
  name,
  { translateY: '3em', opacity: 0 },
  { translateY: '0em', opacity: 1 },
)
const defaultStyle = {
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { animation: `${name} 1000ms linear both`, opacity: 1 },
  exiting: { animation: `${name} 1000ms linear both reverse`, opacity: 1 },
  exited: { opacity: 0 },
}

export const BottomUpTransitionView: FC<
  BaseTransitionViewProps & Partial<TransitionProps>
> = BaseTransitionView(defaultStyle, transitionStyles)
