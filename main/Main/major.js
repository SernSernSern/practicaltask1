import React from 'react'
import { View, Image, Text } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

const base = BASE_URL

const Major = prop => {
  return pug`
    View.div
      Image.image(
        source={uri: base + prop.image}
      )
      Text.text(styleName = 'headerTwo')=prop.head
      View.div(styleName='margin')
        each data in prop.texts
          Text.text(styleName = 'extraSmall')=data
  `
}

export default Major
