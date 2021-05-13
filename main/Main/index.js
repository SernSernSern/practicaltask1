import React from 'react';
import {View, SectionList, Image, Text, Button, TouchableOpacity} from 'react-native';
import { BASE_URL } from '@env'
import './index.styl'



const Main = prop => {
    const url = '/pic01.jpg'

    const base = BASE_URL

    return pug`
        View.main
            View.section1
                View.div
                    View.div2
                        Text.text Ipsum sed adipiscing
                        Text.textsmal Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
                        View.butpadding
                            Button(
                                color="#9acff2"
                                title="Learn more"
                            )
                    Image.image(
                        source={uri: base + url}
                    )
            View.section2
                Text.text2 Magna veroeros
                View.featurecolumn
                    View.li
                        Image.image2(
                            source={uri: base + url}
                        )
                        Text.texthed Ipsum consequat
                        Text.textmain Sed lorem amet ipsum dolor et amet 
                        Text.textmain nullam consequat a feugiat consequat 
                        Text.textmain tempus veroeros sed consequat.
                    View.li
                        Image.image2(
                            source={uri: base + url}
                        )
                        Text.texthed Amed sed feugiat
                        Text.textmain Sed lorem amet ipsum dolor et amet 
                        Text.textmain nullam consequat a feugiat consequat 
                        Text.textmain tempus veroeros sed consequat.
                    View.li
                        Image.image2(
                            source={uri: base + url}
                        )
                        Text.texthed Dolor nullam
                        Text.textmain Sed lorem amet ipsum dolor et amet
                        Text.textmain nullam consequat a feugiat consequat
                        Text.textmain tempus veroeros sed consequat
                View.fu
                        View.se2
                    
            View.section3
                Text.text2 Ipsum consequat
                View.fe
                    Text.text3 Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                View.all
                    View.style1
                    View.style2
                    View.style3
                    View.style4
                    View.style5
                View.texter
                    Text.text3 Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar 
                    Text.text3 faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
                View.butpadding2
                    Button(
                        color="#dedede"
                        title="Learn more"
                    )
            View.section4
                View.major
                    Text.majortext Congue imperdiet
                    Text.majortextsmal Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                    View.majorbuttons
                        Button(
                            color="#dedede"
                            title="Learn more"
                        )
                        Button(
                            color="#9acff2"
                            title="Learn more"
                        )
    `
}

export default Main;