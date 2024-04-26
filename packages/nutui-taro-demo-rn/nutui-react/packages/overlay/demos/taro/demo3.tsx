import React, { useState } from 'react'
import { Button, Cell, Overlay } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const handleToggleShow = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }
  return (
    <>
      <Cell>
        <Button type="primary" onClick={handleToggleShow}>
          设置动画时间
        </Button>
      </Cell>

      <Overlay
        visible={visible}
        onClick={onClose}
        style={{ '--nutui-overlay-animation-duration': '2.5s' }}
        duration={2500}
        afterShow={() => {
          console.log('afterShow')
        }}
        afterClose={() => {
          console.log('afterClose')
        }}
      />
    </>
  )
}
export default Demo3
