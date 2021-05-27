import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const icon = [faDeaf, faDeaf, faDeaf, faDeaf, faDeaf]

const items = [
  { title: 'Address', description: '1234 Somewhere Road • Nashville, TN 00000 • USA' },
  { title: 'Phone', description: '(000) 000-0000 x 0000' },
  { title: 'Email', description: 'information@untitled.tld' }
]

const Footer = () => {
  return pug`
    View.root
      View.about
        Text.title Aliquam sed mauris
        Text.description Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        TouchableOpacity.button
          Text.buttonText Learn more                 
      View.adress
        Text.title Etiam feugiat
        each item in items
          View.adressRow
            Text.adressTitle=item.title
            Text.adressDescription=item.description
        View.icons
          each item, index in icon
            TouchableOpacity.icon(styleName={first:!index})
              FontAwesomeIcon(
                icon=item
                color="#ffffff"
                size=24
              )
    View.copyright
      Text.copyrightText © Untitled. Design: 
      TouchableOpacity
        Text.copyrightText(styleName='url') HTML5 UP
      Text.copyrightText . Demo Images: 
      TouchableOpacity
        Text.copyrightText(styleName='url') Unsplash
  `
}

export default Footer
