import React from 'react'
import { BackTop, Cell } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <div id="target" style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <Cell key={index}>我是测试数据{index}</Cell>
      })}
      <BackTop target="target" threshold={200} />
    </div>
  )
}
export default Demo2
