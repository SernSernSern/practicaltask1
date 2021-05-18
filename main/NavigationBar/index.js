import React from 'react';
import {View, Button} from 'react-native';
import './index.styl'

const NavigationBar = prop => {
  return pug`
    View.nav
      Button(
        color="#dedede"
        title="Introduction"
     )
      Button(
        color="#dedede"
        title="First Section"
      )
      Button(
        color="#dedede"
        title="Second Section"
      )
      Button(
        color="#dedede"
        title="Get Started"
      )
  `
}

export default NavigationBar;