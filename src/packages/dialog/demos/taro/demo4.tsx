import React, { useState } from 'react'
import { Text } from '@tarojs/components'
import { Cell, Dialog } from '@nutui/nutui-react-taro'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Cell title="点击取消时，拦截" onClick={() => setVisible(true)} />
      <Dialog
        title="点击取消时，拦截"
        visible={visible}
        closeOnOverlayClick={false}
        beforeCancel={() => {
          console.log('stop close')
          return false
        }}
        onClose={() => {
          setVisible(false)
        }}
      >
        <Text>支持函数调用和组件调用两种方式。</Text>
      </Dialog>
    </>
  )
}
export default Demo4
