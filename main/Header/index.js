import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Logo from './logo.svg'
import './index.styl'

const Header = prop => {
  return pug`
    View.root
      Logo
      Text.title Stellar
      View.row
        Text.small Just another free, fully responsive site template
        TouchableOpacity
          Text.small  @ajlkn
        Text.small  for 
        TouchableOpacity
          Text.small HTML5 UP
  `
}

export default Header
