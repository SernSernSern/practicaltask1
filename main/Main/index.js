import React from 'react';
import {View, SectionList, Image, Text, Button, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'

const Main = prop => {
    
  const url = '/pic01.jpg'

  const base = BASE_URL

  return pug`
    View.main
      View.section.s1
        View.div.d1
          View.div.d2
            Text.text.h1 Ipsum sed adipiscing
            Text.text.smal Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
            View.button.b1
              Button(
                color="#9acff2"
                title="Learn more"
              )
          Image.image.i1(
            source={uri: base + url}
          )
      View.section.s2
        Text.text.h1 Magna veroeros
        View.div.d4
          View.div.li
            Image.image.i2(
              source={uri: base + url}
            )
            Text.text.h2 Ipsum consequat
            View.div.text
              Text.text.xl Sed lorem amet ipsum dolor et amet 
              Text.text.xl nullam consequat a feugiat consequat 
              Text.text.xl tempus veroeros sed consequat.
          View.div.li
            Image.image.i2(
              source={uri: base + url}
            )
            Text.text.h2 Amed sed feugiat
            View.div.text
              Text.text.xl Sed lorem amet ipsum dolor et amet 
              Text.text.xl nullam consequat a feugiat consequat 
              Text.text.xl tempus veroeros sed consequat.
          View.div.li
            Image.image.i2(
              source={uri: base + url}
            )
            Text.text.h2 Dolor nullam
            View.div.text
              Text.text.xl Sed lorem amet ipsum dolor et amet
              Text.text.xl nullam consequat a feugiat consequat
              Text.text.xl tempus veroeros sed consequat
        View.div.d3
          View.button.b1
            Button(
              color="#9acff2"
              title="Learn more"
            )
                    
      View.section.s2
        Text.text.h1 Ipsum consequat
        View.div.d3
          Text.text.smal.center Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
        View.div.column
          View.style.s1
          View.style.s2
          View.style.s3
          View.style.s4
          View.style.s5
        View.div.text.intext
          Text.text.smal Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar 
          Text.text.smal faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
        View.button.b1
          Button(
            color="#dedede"
            title="Learn more"
          )
      View.section.s2
        View.div.d3
          Text.text.h1 Congue imperdiet
          Text.text.smal Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
          View.button.b2
            View.button.bself
              Button(
                color="#dedede"
                title="Learn more"
              )
            View.button.bself
              Button(
                color="#9acff2"
                title="Learn more"
              )
  `
}

export default Main;