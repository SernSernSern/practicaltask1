import React from 'react'
import {View, Text, Button, Linking, TouchableOpacity} from 'react-native'
import './index.styl'

const Footer = prop => {

    return pug`
        View.flexer
            View.selection1
                Text.text1 Aliquam sed mauris
                Text.text2 Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
                View.ui
                    View.li
                        
            View.selection2
                Text.text1 Etiam feugiat
                View.view
                    Text.text2 Address     1234 Somewhere Road • Nashville, TN 00000 • USA
                    Text.text2 Phone     (000) 000-0000 x 0000
                    Text.text2 Email     information@untitled.tld
                View.ul
                    View.liua
                        TouchableOpacity.roundButton1
                    View.liua
                        TouchableOpacity.roundButton1
                    View.liua
                        TouchableOpacity.roundButton1
                    View.liua
                        TouchableOpacity.roundButton1
                    View.liua
                        TouchableOpacity.roundButton1
    `

    
}

export default Footer;