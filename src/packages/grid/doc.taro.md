#  Grid 宫格

### 介绍

用于分隔成等宽区块进行页面导航。

### 安装

```javascript
import { Grid, GridItem } from '@nutui/nutui-react-taro'
```

## 代码演示

### 基础用法

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid>
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 自定义列数

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid columnNum={3}>
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 正方形格子

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid columnNum={3} square>
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::


### 格子间距

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid gutter={3}>
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 内容翻转

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid reverse>
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 内容横向

:::demo
```tsx
import React from 'react'
import { Grid, GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid direction="horizontal">
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 图标颜色/大小

:::demo
```tsx
import React from 'react'
import { Grid,GridItem } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid columnNum="3">
      <GridItem icon={<Dongdong />} text="文字" />
      <GridItem
        icon={<Dongdong width={40} height={40} color="#478EF2"/>}
        text="文字"
      />
      <GridItem icon={<Dongdong />} text="文字" />
    </Grid>
  )
}
export default App
```
:::

### 自定义内容

:::demo
```tsx
import React from 'react'
import { Grid, GridItem, Avatar } from '@nutui/nutui-react-taro'
import { Dongdong, My } from '@nutui/icons-react-taro'

const App = () => {
  return (
    <Grid border={false}>
      <GridItem icon={<Dongdong />} text={<span>More</span>} />
      <GridItem
        text={
          <Avatar
            className="demo-avatar"
            icon={<My color="#fff"/>}
            bgColor="#FA2C19"
          />
        }
        onClick={handleClick}
      />
      <GridItem
        icon={
          <Avatar
            className="demo-avatar"
            icon={<My color="#fff"/>}
            bgColor="#FA2C19"
          />
        }
      />
      <GridItem>
      <Avatar
        size="large"
        icon={
          <img
            width="100%"
            height="100%"
            alt="头像"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        }
      />
      </GridItem>
    </Grid>
  )
}
export default App
```
:::

## API

### Props

| 参数          | 说明                                      | 类型                    | 默认值      |
|---------------|------------------------------------------|------------------------|------------|
| columnNum    | 列数                                     | number \| string         | `4`        |
| border        | 是否显示边框                               | boolean                | `true`     |
| gutter        | 格子之间的间距，默认单位为`px`               | number \| string        | `0`        |
| center        | 是否将格子内容居中显示                      | boolean                | `true`      |
| square        | 是否将格子固定为正方形                      | boolean                | `false`     |
| reverse       | 内容翻转                                  | boolean                | `false`     |
| direction     | 格子内容排列的方向，可选值为 `horizontal`    | string                 | `vertical`  |
| iconSize`v2.0.0 废弃`     | 图标大小，如 `20px` `2em` `2rem`          | number \| string        | `28px`     |
| iconColor`v2.0.0 废弃`    | 图标颜色                                  | string                 | -          |

## Grid Event

| 字段       | 说明         | 回调参数                                           |
|----------|--------------|----------------------------------------------------|
| onClick | 宫格子项点击事件 | 点击当前项, 索引 |

### GridItem Props

| 参数                  | 说明                                                                                     | 类型               | 默认值      |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|------------|
| text                 | 文字                                                                                     | string \| ReactNode   | -          |
| icon                 | icon                                                              | ReactNode   | -          |
| iconSize`v2.0.0 废弃`            | 图标大小，如 `20px` `2em` `2rem`                                                          | number \| string   | `28px`     |
| iconColor`v2.0.0 废弃`           | 图标颜色                                                                                  | string            | -           |

### GridItem Event

| 参数                  | 说明                                                                                     | 回调参数    |
|----------------------|-----------------------------------------------------------------------------------------|--------------------|
| onClick `1.3.14`                 | 点击格子时触发                                                                         | `event: Event`      |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nutui-grid-border-color | `#f5f6f7` |
| --nutui-grid-item-content-padding | `16px 8px` |
| --nutui-grid-item-content-bg-color | `$white` |
| --nutui-grid-item-text-margin | `8px` |
| --nutui-grid-item-text-color | `$gray1` |
| --nutui-grid-item-icon-color | `$gray1` |
| --nutui-grid-item-text-font-size | `$font-size-1` |