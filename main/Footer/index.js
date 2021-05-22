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
    View.view(styleName='footer')
      View.view(styleName='selection about')
        Text.text(styleName='head') Aliquam sed mauris
        Text.text(styleName='small') Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        
                        
      View.view.selection.adress
        Text.text(styleName='head') Etiam feugiat
        View.view(styleName='marg')
          Text.text(styleName='small') Address     1234 Somewhere Road • Nashville, TN 00000 • USA
          Text.text(styleName='small') Phone     (000) 000-0000 x 0000
          Text.text(styleName='small') Email     information@untitled.tld
        View.view(styleName='icons')
          each item, index in but
            View.view(styleName = [item.view, {first: !index}])
              TouchableOpacity.button
                FontAwesomeIcon(
                  icon=item.icon,
                  color="#ffffff"
                )
          
  `
}

export default Footer
