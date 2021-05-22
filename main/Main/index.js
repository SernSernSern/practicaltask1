import React from 'react'
import { View, Image, Text, Button } from 'react-native'
import { BASE_URL } from '@env'
import { faDeaf } from '@fortawesome/free-solid-svg-icons'
import StaticItem from './staticItem'
import Major from './major'
import './index.styl'

const Main = prop => {
  const url = '/pic01.jpg'

  const base = BASE_URL

  const items = [
    {
      icon: faDeaf,
      count: 5700,
      text: 'Count',
      color: 'pink'
    },
    {
      icon: faDeaf,
      count: 5700,
      text: 'Count',
      color: 'liliac'
    },
    {
      icon: faDeaf,
      count: 5700,
      text: 'Count',
      color: 'purple'
    },
    {
      icon: faDeaf,
      count: 5700,
      text: 'Count',
      color: 'blue'
    },
    {
      icon: faDeaf,
      count: 5700,
      text: 'Count',
      color: 'sky'
    }
  ]

  const but = [
    { color: '#dedede', text: 'Learn more' },
    { color: '#9acff2', text: 'Learn more' }
  ]

  const major = [
    {
      image: '/pic01.jpg',
      head: 'Ipsum consequat',
      texts: [
        'Sed lorem amet ipsum dolor et amet',
        'nullam consequat a feugiat consequat',
        'tempus veroeros sed consequat'
      ]
    },
    {
      image: '/pic01.jpg',
      head: 'Ipsum consequat',
      texts: [
        'Sed lorem amet ipsum dolor et amet',
        'nullam consequat a feugiat consequat',
        'tempus veroeros sed consequat'
      ]
    },
    {
      image: '/pic01.jpg',
      head: 'Ipsum consequat',
      texts: [
        'Sed lorem amet ipsum dolor et amet',
        'nullam consequat a feugiat consequat',
        'tempus veroeros sed consequat'
      ]
    }
  ]

  return pug`
    View.main
      View.section(styleName='intro')
        View.div(styleName='features')
          View.div(styleName='spotlight')
            Text.text(styleName='headerOne') Ipsum sed adipiscing
            Text.text(styleName='small') Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
            View.button(styleName='one')
              Button(
                color="#9acff2"
                title="Learn more"
              )
          Image.image(
            source={uri: base + url}
          )
      View.section
        Text.text(styleName='headerOne') Magna veroeros
        View.div(styleName='major')
          each item in major
            Major(...item)
        View.div
          View.button(styleName='one')
            Button(
              color="#9acff2"
              title="Learn more"
            )
                    
      View.section
        Text.text(styleName='headerOne') Ipsum consequat
        View.div
          Text.text(styleName='small center') Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
        View.div(styleName='column')
          each item in items
            StaticItem(...item)
        View.div(styleName='intext')
          Text.text(styleName='small') Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar 
          Text.text(styleName='small') faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
        View.button(styleName='one')
          Button(
            color="#dedede"
            title="Learn more"
          )
      View.section
        View.div
          Text.text(styleName='headerOne') Congue imperdiet
          Text.text(styleName='small') Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
          View.button(styleName='row')
            each item, index in but
              View.button(styleName={first: !index})
                Button(
                  color=item.color
                  title=item.text
                )
            
  `
}

export default Main
