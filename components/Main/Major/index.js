import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL
const major = [
  {
    image: '/pic01.jpg',
    head: 'Ipsum consequat',
    texts: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat'

  },
  {
    image: '/pic01.jpg',
    head: 'Ipsum consequat',
    texts: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat'

  },
  {
    image: '/pic01.jpg',
    head: 'Ipsum consequat',
    texts: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat'

  }
]

const Major = () => {
  return pug`
    View.root
      Text.title Magna veroeros
      View.border
      View.major
        each item, index in major
          View.item(key=index styleName={first:!index})
            View.circleView  
              Image.image(
                  source={uri: base + item.image}
              )
            Text.itemTitle=item.head
            Text.itemText=item.texts
      TouchableOpacity.button
        Text.buttonText Learn more
  `
}

export default Major
