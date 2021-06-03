import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { BASE_URL } from '@env'
import './index.styl'

export default (function Header () {
  const url = '/logo.png'

  const base = BASE_URL
  return pug`
    View.root
      Image.image(source={uri: base + url})
      Text.title Stellar
      View.row
        Text.description Just another free, fully responsive site template
          TouchableOpacity  
            Text.description.url  @ajlkn
          Text.description  for 
          TouchableOpacity
            Text.description.url HTML5 UP
  `
})
