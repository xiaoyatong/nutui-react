# Swiper

## Intro

Often used in a group of pictures or card rotation.

## Install

```tsx
import { Swiper } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::
:::demo

```tsx
import React, { useState } from 'react'
import { Swiper } from '@nutui/nutui-react';

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]
const App = () => {
  return (
    <div className="demo-box" style={{ height: 150 }}>
      <Swiper loop slideSize={300} effect={{ name: 'focus', scale: 0.9 }}>
        {list.map((item, index) => {
          return (
            <Swiper.Item key={item}>
              <img src={list[index]} alt={list[index]} draggable={false} />
            </Swiper.Item>
          )
        })}
      </Swiper>
    </div>
  )
}
export default App;
```

:::
### 异步加载

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::


### Custom size

`width` Custom rotation size

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Custom paging indicator

`indicator` Custom indicator

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Manual switching

You can manually switch through `ref` (`prev`, `next`)

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Vertical direction

`direction` Custom rotation direction

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Horizontal center display

`isCenter` means it can be centered, and `width` must be passed at the same time

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Vertically centered display


:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Many datas in a frame

`center` 代表可居中，同时必须传 `height`

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

## Swiper

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| slideSize | Size of rotation card | `string` \| `number`  | `-` |
| direction | Rotation direction | `horizontal` \| `vertical` | `horizontal` |
| indicator | Whether the pagination indicator is displayed | `boolean` | `false` |
| loop | Whether to rotate | `boolean` | `true` |
| duration | Animation duration（Unit ms | `number` \| `string` | `500` |
| autoPlay | Automatic rotation duration, 0 means no automatic | `number` \| `string` | `0` |
| defaultValue | Initialize index value | `number` \| `string` | `0` |
| touchable | Is it possible to touch swipe | `boolean` | `true` |
| onChange | Callback after card switching | `(current: number) => void` | `-` |

### Ref

| Property | Description | Type |
| --- | --- | --- |
| prev | Switch to previous page | `()=>void` |
| next | Switch to next page | `()=>void` |
| to | Switch to the specified rotation | `(index: number)=>void` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default |
| --- | --- | --- |
| \--nutui-swiper-pagination-bottom | The distance from the bottom of the pager | `12px` |
| \--swiper-offset | Offset of the carouse | `0`    |