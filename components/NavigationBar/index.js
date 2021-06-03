import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const data = ['Introduction', 'First Section', 'Second Section', 'Get Started']

export default (function NavigationBar () {
  return pug`
    View.root
      each item, index in data
        TouchableOpacity.button(key=index styleName={first: !index})
          Text.title=item
  `
})