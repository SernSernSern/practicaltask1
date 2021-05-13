import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import Svg, {Path} from 'react-native-svg'
import Logo from './logo.svg'
import './index.styl'


const Header = prop => {

    return pug`
        View.header
            Logo
            Text.text  Stellar
            Text.smaltext Just another free, fully responsive site template
            
    `

    
}

export default Header;



