import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const data = [
  { title: 'Introduction' },
  { title: 'First Section' },
  { title: 'Second Section' },
  { title: 'Get Started' }
]

const NavigationBar = prop => {
  return pug`
    View.root
      each item, index in data
        TouchableOpacity.button(styleName={first: !index})
          Text.title=item.title
  `
}

export default NavigationBar
