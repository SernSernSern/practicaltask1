import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import './staticItem.styl'

const items = [
  {
    first: true,
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: 'pink',
    last: false
  },
  {
    first: false,
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: 'liliac',
    last: false
  },
  {
    first: false,
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: 'purple',
    last: false
  },
  {
    first: false,
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: 'blue',
    last: false
  },
  {
    first: false,
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: 'sky',
    last: true
  }
]

const StaticItem = prop => {
  return pug`
    View.root
      Text.header Ipsum consequat
      View.div
        Text.small.center Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.column
        each item in items
          Item(...item)
      View
        Text.textColumn Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
        TouchableOpacity.button
          Text.extraSmall.grey Learn More
    `
}

const Item = prop => {
  return pug`
    View.style(styleName=[{first:prop.first}, {last:prop.last}, prop.color] )
      FontAwesomeIcon(
        icon=prop.icon
        size=50
        color='white'
      )
      Text.textstyle=prop.count
      Text.extraSmall.white=prop.text
  `
}

export default StaticItem
