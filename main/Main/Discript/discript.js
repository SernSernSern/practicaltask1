import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import './discript.styl'

const but = [
  { text: 'Learn more' },
  { text: 'Learn more' }
]

const Discript = prop => {
  return pug`
    View.root
      View.div
        Text.header Congue imperdiet
        Text.small Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
        View.row
          each item, index in but
            TouchableOpacity.button(styleName={first:!index})
              Text.extraSmall(styleName={first:!index})=item.text           
  `
}

export default Discript
