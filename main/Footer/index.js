import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const but = [
  { view: 'icon', icon: faDeaf },
  { view: 'icon', icon: faDeaf },
  { view: 'icon', icon: faDeaf },
  { view: 'icon', icon: faDeaf },
  { view: 'icon', icon: faDeaf }
]

const Footer = prop => {
  return pug`
    View.root
      View.selection.about
        Text.title Aliquam sed mauris
        Text.small Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        TouchableOpacity.button
          Text.small.nomarg Learn more                 
      View.selection.adress
        Text.title Etiam feugiat
          View
            View.row
              Text.small Address
              Text.small.marg 1234 Somewhere Road • Nashville, TN 00000 • USA
            View.row
              Text.small Phone
              Text.small.marg (000) 000-0000 x 0000
            View.row
              Text.small Email
              Text.small.marg information@untitled.tld
        View.icons
          each item, index in but
            TouchableOpacity.icon(styleName={first:!index})
              FontAwesomeIcon(
                icon=item.icon,
                color="#ffffff"
                size=24
              )
    View.copyright
      View.row
        Text.small © Untitled. Design: 
        TouchableOpacity
          Text.small HTML5 UP
        Text.small . Demo Images: 
        TouchableOpacity
          Text.small Unsplash

  `
}

export default Footer
