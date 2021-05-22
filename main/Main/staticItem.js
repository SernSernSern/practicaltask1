import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import './index.styl'

const StaticItem = prop => {
  return pug`
    View.style(styleName=prop.color)
      FontAwesomeIcon(
        icon=prop.icon
        size=50
        color='white'
      )
      Text.text(styleName='textstyle')=prop.count
      Text.text(styleName='textstyle')=prop.text
  `
}

export default StaticItem
