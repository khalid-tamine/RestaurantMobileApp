import { View, Text , TouchableOpacity , ScrollView } from 'react-native'
import React from 'react'
import HorizontalFoodCard from './HorizontalFoodCard'
import Section from './Section'
import { SIZES } from '../constants'
export default function RenderRecomendedSection( {recommends} ) {
        
    return (
        <Section
            title = "Recomended"
            onPress = {() => console.log("Show All Recomended")}
        >
            <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
            >
                {
                    recommends.map((item, index) => ( 
                        <View
                            key = {`RcdCard-${item.id}`}
                        >
                            <HorizontalFoodCard
                                containerStyle = {{
                                    height : 180,
                                    width : SIZES.width * 0.85,
                                    marginLeft : index == 0 ? SIZES.padding : 18,
                                    marginRight : index == recommends.length - 1 ? SIZES.padding : 0,
                                    alignItems : 'center',
                                }}
                                imageStyle = {{
                                    marginTop : 35,
                                    height : 150,
                                    width : 150
                                }}
                                item = {item}
                                onPress = {() => console.log("Horizontal Food Card")}
                            />
                        </View>
                    ))
                
                }
            </ScrollView>
                    

        </Section>
    )
}