import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

const button = ['Learn more', 'Learn more']

const Description = () => {
  return pug`
    View.root
      Text.title Congue imperdiet
      Text.description Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.row
        each item, index in button
          TouchableOpacity.button(key=index styleName={first:!index})
            Text.buttonText(styleName={first:!index})=item           
  `
}

export default Description
