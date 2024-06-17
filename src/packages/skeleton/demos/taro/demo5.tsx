import { Avatar, Image, Skeleton, Switch } from '@nutui/nutui-react-taro'
import React, { useState } from 'react'
import { View, Text } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <View className="content" style={{ width: '100%' }}>
      <Switch
        onChange={(value, event: any) => changeStatus(value, event)}
        style={{ marginBottom: pxTransform(8) }}
      />
      <Skeleton title animated avatar rows={3} visible={checked}>
        <View className="nut-skeleton-content">
          <Avatar
            size="50"
            icon={
              <Image
                loading={false}
                src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              />
            }
          />
          <View className="right-content">
            <Text className="title">NutUI-React</Text>
            <View className="description">
              一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </View>
          </View>
        </View>
      </Skeleton>
    </View>
  )
}
export default Demo5
