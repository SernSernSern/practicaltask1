import React from 'react'
import { View, ScrollView, ImageBackground } from 'react-native'
import { observer } from 'startupjs'
import { BASE_URL } from '@env'
import Header from '../Header'
import NavigationBar from '../NavigationBar'
import Main from '../Main'
import Footer from '../Footer'
import './index.styl'

export default observer(function ({ children }) {
  const url = '/overlay.png'

  const base = BASE_URL

  return pug`
    ScrollView.body
      ImageBackground(source={uri: base + url})
        View.wrapper
          Header
          NavigationBar
          Main
          Footer
  `
})
