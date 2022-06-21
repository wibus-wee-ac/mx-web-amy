import { ImageLazy, ImageLazyRef } from '../../../components/universal/Image'
import { reaction } from 'mobx'
import { observer } from 'mobx-react-lite'
import React, { FC, useContext, useEffect, useRef, useState } from 'react'
// import { useStore } from 'store'
import { calculateDimensions } from '../../../utils/images'

// import { ImageSizeMetaContext } from '../../../../context/image-size'

const getContainerSize = () => {
  const $wrap = document.getElementById('write')
  if (!$wrap) {
    return
  }

  return $wrap.getBoundingClientRect().width
}
const getViewportWidth = () => {
  const $wrap = document.getElementById('write')
  if (!$wrap) {
    return 100
  } 
  return $wrap.getBoundingClientRect().width
}
const getViewportHeight = () => {
  const $wrap = document.getElementById('write')
  if (!$wrap) {
    return 100
  }
  return $wrap.getBoundingClientRect().height
}

/**
 * This Component only can render in browser.
 */
const _Image: FC<{ src: string; alt?: string }> = observer(({ src, alt }) => {
  // const { appUIStore } = useStore()
  const imageRef = useRef<ImageLazyRef>(null)
  useEffect(() => {
    const disposer = reaction(
      () => getViewportWidth() | getViewportHeight(),
      () => {
        if (imageRef.current?.status === 'loaded') {
          disposer()

          return
        }
        setMaxWidth(getContainerSize())
      },
    )

    return () => {
      disposer()
    }
  }, [])
  // const images = useContext(ImageSizeMetaContext)

  // const isPrintMode = appUIStore.mediaType === 'print'

  const [maxWidth, setMaxWidth] = useState(getContainerSize())

  // 因为有动画开始不能获取到大小 , 直到获取到 container 的大小
  useEffect(() => {
    let raf = requestAnimationFrame(function a() {
      const size = getContainerSize()
      if (!size) {
        requestAnimationFrame(a)
      } else {
        setMaxWidth(size)
      }
    }) as any
    return () => {
      raf = cancelAnimationFrame(raf)
    }
  }, [])

  const max = {
    width: maxWidth ?? 644,
    height: Infinity,
  }

  // let cal = {} as any
  // if (width && height) {
  //   cal = calculateDimensions(width, height, max)
  // }

  return (
    <ImageLazy
      popup
      ref={imageRef}
      src={src}
      alt={alt || src}
      backgroundColor={'#bbb'}
      height={300}
      width={300}
      style={style}
      // data-raw-height={300}
      // data-raw-width={300}
      overflowHidden
    />
  )
})
const style = { padding: '1rem 0' }
export const Image =
  typeof document === 'undefined'
    ? ({ src, alt }) => <img src={src} alt={alt} />
    : _Image
