import React from 'react'
import {View, Text, Button, Linking, TouchableOpacity} from 'react-native'
import './index.styl'

const Footer = prop => {

  return pug`
    View.view.footer
      View.view.selection.s1
        Text.text.head Aliquam sed mauris
        Text.text.p Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
        View.ui
          View.li
                        
      View.view.selection.s2
        Text.text.head Etiam feugiat
        View.view.adress
          Text.text.p Address     1234 Somewhere Road • Nashville, TN 00000 • USA
          Text.text.p Phone     (000) 000-0000 x 0000
          Text.text.p Email     information@untitled.tld
        View.view.ul
          View.view.li
            TouchableOpacity.button.b1
          View.view.li
            TouchableOpacity.button.b1
          View.view.li
            TouchableOpacity.button.b1
          View.view.li
            TouchableOpacity.button.b1
          View.view.li
            TouchableOpacity.button.b1
  `

    
}

export default Footer;