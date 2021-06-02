import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const items = [
  {
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: '#efa8b0'
  },
  {
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: '#c79cc8'
  },
  {
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: '#a89cc8'
  },
  {
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: '#9bb2e1'
  },
  {
    icon: faDeaf,
    count: 5700,
    text: 'Count',
    color: '#8cc9f0'
  }
]

const StaticItems = () => {
  return pug`
    View.root
      Text.title Ipsum consequat
      Text.description Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
      View.styleItem
        each item, index in items
          View.item(
              key=index
              styleName=[{first:!index}, {last:index === items.length-1}]
              style={backgroundColor: item.color}
            )
            FontAwesomeIcon(
              icon=item.icon
              size=50
              color='white'
            )
            Text.itemCountText=item.count
            Text.itemText(styleName='white')=item.text
      Text.contentText Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
      TouchableOpacity.button
        Text.buttonText.grey Learn More
    `
}

export default StaticItems
