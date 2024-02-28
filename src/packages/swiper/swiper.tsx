import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useSpring } from '@react-spring/web'
import classNames from 'classnames'
import { BasicComponent } from '@/utils/typings'
import Indicator from '@/packages/indicator'
import { getRefValue, useRefState } from '@/utils/use-ref-state'
import { defaultEffect } from '@/packages/swiper/effects/default'
import {
  focusEffect,
  updateTransform,
  useList,
} from '@/packages/swiper/effects/focus'
import { SwiperRef } from '@/packages/swiper/types'

export interface FocusEffect {
  name: 'focus'
  scale: number
}

export interface SwiperProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  indicator: ReactNode
  loop: boolean
  duration: number
  autoPlay: boolean
  defaultValue: number
  touchable: boolean
  effect: FocusEffect | undefined
  slideSize?: number
  onChange?: (index: number) => void
}

const defaultProps = {
  direction: 'horizontal',
  indicator: false,
  loop: false,
  duration: 3000,
  autoPlay: false,
  defaultValue: 0,
  touchable: true,
  effect: undefined,
} as SwiperProps

export const Swiper = React.forwardRef<SwiperRef, Partial<SwiperProps>>(
  (props, ref) => {
    const classPrefix = 'nut-swiper'
    const {
      children,
      direction,
      indicator,
      loop,
      effect,
      autoPlay,
      touchable,
      defaultValue,
      duration,
      style,
      className,
    } = { ...defaultProps, ...props }
    const isVertical = direction === 'vertical'
    const count = useMemo(() => {
      let c = 0
      React.Children.map(children, (child, index) => {
        c += 1
      })
      return c
    }, [children])
    const timeoutRef = useRef<number | null>(null)
    const [dragging, setDragging] = useState(false)
    const [current, setCurrent] = useRefState(defaultValue)
    const stageRef = useRef<HTMLDivElement>(null)
    const [springs, api] = useSpring(() => ({
      x: !isVertical ? current.current * 100 * -1 : 0,
      y: isVertical ? current.current * 100 * -1 : 0,
      s: 0,
      reset: () => {},
      config: { tension: 200, friction: 30 },
    }))

    const swiperDirection = useRef(1)

    const [transforms, setTransforms] = useList(effect, count, current)

    // 自动播放
    const runTimeSwiper = () => {
      timeoutRef.current = window.setTimeout(() => {
        next()
        runTimeSwiper()
      }, duration)
    }
    useEffect(() => {
      if (!autoPlay || dragging) return
      runTimeSwiper()

      return () => {
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
      }
    }, [autoPlay, duration, dragging, count])

    const to = (index: number, immediate = false) => {
      let targetIndex = bound(index, 0, count - 1)
      if (loop) {
        const cycleIndex = index % count
        targetIndex = cycleIndex < 0 ? cycleIndex + count : cycleIndex
      }
      setCurrent(targetIndex)
      props.onChange?.(targetIndex)

      if (effect) {
        updateTransform(transforms, setTransforms, effect, targetIndex)
      }

      api.start({
        // 这里需要统一成百分比
        [isVertical ? 'y' : 'x']: -targetIndex * 100,
        s: 0,
        immediate,
      })
    }
    const getSpringsAxis = () => {
      return springs[isVertical ? 'y' : 'x']
    }
    const next = () => {
      to(Math.round(-getSpringsAxis().get() / 100) + 1)
    }
    const prev = () => {
      to(Math.round(-getSpringsAxis().get() / 100) - 1)
    }
    React.useImperativeHandle(ref, () => ({
      to,
      next,
      prev,
    }))
    const getSlideSize = () => {
      if (props.slideSize) return props.slideSize
      if (stageRef.current) {
        if (isVertical) return stageRef.current.offsetHeight
        return stageRef.current.offsetWidth
      }
      // 考虑怎么转换为百分比
      return 0
    }
    const bound = (v: number, min: number, max: number) => {
      if (min !== undefined) {
        v = Math.max(v, min)
      }
      if (max !== undefined) {
        v = Math.min(v, max)
      }
      return v
    }
    const bind = useDrag(
      (state) => {
        const axis = Number(isVertical)
        const slideSize = getSlideSize()
        const offset = state.offset[axis]

        setDragging(!!state.dragging)

        const distance = state.distance[axis]
        swiperDirection.current = state.direction[axis]

        if (state.last) {
          // 计算位置
          const swipeDirection = state.direction[axis]
          const velocity = state.velocity[axis]
          const minIndex = Math.floor(offset / slideSize)
          const maxIndex = minIndex + 1
          const index = Math.round(
            (offset + velocity * 2000 * swipeDirection) / slideSize
          )
          to(bound(index, minIndex, maxIndex))
        } else {
          // 实时移动，换算百分比
          api.start({
            [isVertical ? 'y' : 'x']: -((offset / slideSize) * 100),
            s: distance / slideSize,
            immediate: true,
          })
        }
      },
      {
        enabled: touchable,
        transform: ([x, y]) => [-x, -y],
        from: () => {
          // 由百分比转换到像素
          const slideSize = getSlideSize()
          const x = (springs.x.get() / 100) * slideSize
          const y = (springs.y.get() / 100) * slideSize
          return [-x, -y]
        },
        triggerAllEvents: true,
        bounds: () => {
          if (loop) return {}
          const slideSize = getSlideSize()
          if (isVertical) {
            return { top: 0, bottom: (count - 1) * slideSize }
          }
          return { left: 0, right: (count - 1) * slideSize }
        },
        rubberband: true,
        axis: isVertical ? 'y' : 'x',
      }
    )

    const renderIndicator = () => {
      if (React.isValidElement(indicator)) return indicator
      if (!indicator) return null
      return (
        <div
          className={classNames({
            [`${classPrefix}-indicator`]: true,
            [`${classPrefix}-indicator-vertical`]: isVertical,
          })}
        >
          <Indicator
            current={getRefValue(current)}
            total={count}
            direction={direction}
          />
        </div>
      )
    }

    const renderEffect = () => {
      if (!effect)
        return defaultEffect({
          children,
          getSpringsAxis,
          loop,
          count,
          isVertical,
        })
      if (effect && effect.name === 'focus') {
        return focusEffect({
          children,
          springs,
          loop,
          count,
          isVertical,
          effect,
          current,
          swiperDirection,
          dragging,
          transforms,
        })
      }
    }

    const renderSlides = () => {
      return (
        <div
          ref={stageRef}
          className={classNames('nut-swiper-inner', {
            'nut-swiper-inner-vertical': isVertical,
          })}
          style={{
            ...(props.slideSize
              ? { [isVertical ? 'height' : 'width']: `${props.slideSize}px` }
              : {}),
          }}
        >
          {renderEffect()}
        </div>
      )
    }
    return (
      <div
        className={classNames('nut-swiper', className)}
        style={style}
        {...bind()}
      >
        {renderSlides()}
        {renderIndicator()}
      </div>
    )
  }
)
Swiper.defaultProps = defaultProps
Swiper.displayName = 'NutSwiper'
