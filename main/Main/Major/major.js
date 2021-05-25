import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { BASE_URL } from '@env'
import './major.styl'

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

const Maj = prop => {
  return pug`
    View.div
      Image.image(
        source={uri: base + prop.image}
      )
      Text.header=prop.head
      View.margin
        Text.extraSmall=prop.texts
    `
}

const Major = prop => {
  return pug`
    View.root
      Text.header Magna veroeros
      View.major
        each item in major
          Maj(...item)
      
      TouchableOpacity.button
        Text.extraSmall Learn more
  `
}

export default Major
