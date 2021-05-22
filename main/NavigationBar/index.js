import React from 'react'
import { View, Button } from 'react-native'
import './index.styl'

const data = [
  { color: '#dedede', title: 'Introduction' },
  { color: '#dedede', title: 'First Section' },
  { color: '#dedede', title: 'Second Section' },
  { color: '#dedede', title: 'Get Started' }
]

const NavigationBar = prop => {
  return pug`
    View.nav
      each item, index in data
        View.button(styleName={first: !index})
          Button(color=item.color title=item.title)
  `
}

export default NavigationBar
