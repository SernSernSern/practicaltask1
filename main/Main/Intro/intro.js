import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { BASE_URL } from '@env'
import './intro.styl'

const url = '/pic01.jpg'
const base = BASE_URL

const Intro = prop => {
  return pug`
    View.root
      View.features
        View.spotlight
          Text.header Ipsum sed adipiscing
          Text.small Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
          TouchableOpacity.button
            Text.extraSmall Learn more
        Image.image(
          source={uri: base + url}
        )
  `
}

export default Intro
