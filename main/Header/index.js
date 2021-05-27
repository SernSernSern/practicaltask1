import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Logo from './logo.svg'
import './index.styl'

const Header = () => {
  return pug`
    View.root
      Logo
      Text.title Stellar
      View.row
        Text.description Just another free, fully responsive site template
        TouchableOpacity.touchableDescription
          Text.description.url  @ajlkn
        Text.description  for 
        TouchableOpacity.touchableDescription
          Text.description.url HTML5 UP
  `
}

export default Header
