import { FC, memo } from "react";


export const DynamicHeadMeta: FC = memo(
  () => {
    return (
      <></>
    )
  }
)

// memo 可以让组件在每次渲染时都重新计算 props，而不是在第一次渲染时计算。