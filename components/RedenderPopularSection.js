import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import VerticalFoodCard from './VerticalFoodCard'
import Section from './Section'
import { SIZES } from '../constants'

export default  function RedenderPopularSection({popular}) {
    return (
        <Section
            title = "Popular"
            onPress = {() => console.log("Show All Popular")}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
               
            >
                {
                    popular.map((item, index) => (
                        <View
                            key = {`PpCard-${item.id}`}
                        >
                            <VerticalFoodCard
                                containerStyle = {{
                                    marginLeft : index == 0 ? SIZES.padding : 18,
                                    marginRight : index == popular.length - 1 ? SIZES.padding : 0,
                                }}
                                item = {item}
                                onPress = {() => console.log("Vertical Food Card")}
                            />
                        </View>
                    ))
                }
            </ScrollView>


        </Section>
)}