import React from 'react'
import { View } from 'react-native'
import StaticItem from './Item/staticItem'
import Major from './Major/major'
import Intro from './Intro/intro'
import Discript from './Discript/discript'
import './index.styl'

const Main = prop => {
  return pug`
    View.root
      Intro
      Major         
      StaticItem
      Discript       
  `
}

export default Main
