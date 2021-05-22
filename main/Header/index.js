import React from 'react'
import { View, Text } from 'react-native'
import Logo from './logo.svg'
import './index.styl'

const Header = prop => {
  return pug`
    View.header
      Logo
      Text.text  Stellar
      Text.text(styleName='small') Just another free, fully responsive site template        
  `
}

export default Header
