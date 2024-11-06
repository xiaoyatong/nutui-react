import React from 'react'
import Taro from '@tarojs/taro'
import { Icon, ScrollView, Text, Image } from '@tarojs/components'
import '@nutui/icons-react-taro/dist/style_iconfont.css'
import { Add, Dongdong, UserAdd } from '@nutui/icons-react-taro'
import { ArrowLeft, ArrowRight, DoubleLeft, DoubleRight } from './icon.taro'

import Header from '@/sites/components/header'

const IconDemo = () => {
  const doubleRight =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij48cGF0aCBkPSJNNC4xNDcgMTMuOTc0YS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUw3LjEzNiA5IDQuMDI4IDUuMTFhLjc3MS43NzEgMCAxIDEgMS4yMDQtLjk2M2wzLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMSAwIC45NjRsLTMuNDk3IDQuMzcxYS43NzEuNzcxIDAgMCAxLTEuMDg0LjEyem01LjI0NSAwYS43NzEuNzcxIDAgMCAxLS4xMi0xLjA4NUwxMi4zODMgOSA5LjI3MiA1LjExYS43NzEuNzcxIDAgMSAxIDEuMjA1LS45NjNsMy40OTcgNC4zNzFhLjc3MS43NzEgMCAwIDEgMCAuOTY0bC0zLjQ5NyA0LjM3MWEuNzcxLjc3MSAwIDAgMS0xLjA4NS4xMnoiLz48L3N2Zz4='

  return (
    <>
      <Header />
      <ScrollView className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Text>test</Text>
        <ArrowLeft />
        <Text>--test1--</Text>
        <ArrowRight />
        <Text>--test2--</Text>
        <DoubleLeft />
        <Text>--test3--</Text>
        <DoubleRight />
        <Icon type="info_circle" size={20} />
        <Text>--test4--</Text>
        <Image src={doubleRight} svg style={{ width: 20, height: 20 }} />
        <Text>--test5--</Text>
        <Add color="red" style={{ marginRight: '10px' }} />
        <Text>--test6--</Text>
        <UserAdd style={{ marginRight: '10px' }} />
        <Text>--test7--</Text>
        <Dongdong />
        <Text>--test8--</Text>
      </ScrollView>
    </>
  )
}

export default IconDemo
