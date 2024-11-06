import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
import { IconFont } from '@nutui/icons-react-taro'
import { Text, Icon } from '@tarojs/components'

const Demo2 = () => {
  return (
    <Cell>
      <Text>333</Text>
      <Icon type="cancel" />
      <IconFont name="dongdong" size="16" style={{ marginRight: '10px' }} />
      <IconFont name="add" style={{ marginRight: '10px' }} />
      <IconFont name="minus" />
    </Cell>
  )
}
export default Demo2
