import React from 'react'
import { Swiper } from '@nutui/nutui-react'

const Demo6 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  return (
    <div className="demo-box vertical-center">
      <Swiper loop direction="vertical" indicator>
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
export default Demo6
