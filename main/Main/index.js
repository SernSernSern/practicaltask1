import React from 'react'
import { View } from 'react-native'
import StaticItems from './StaticItems'
import Major from './Major'
import Intro from './Intro'
import Description from './Description'
import './index.styl'

const Main = prop => {
  return pug`
    View.root
      Intro
      Major  
      StaticItems
      Description
  `
}

export default Main
