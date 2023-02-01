import { View, Text , ScrollView} from 'react-native'
import React from 'react'
import HorizontalFoodCard from './HorizontalFoodCard'
import { SIZES } from '../constants'

export default function RenderFeed({feedList}){
    return ( 
        <View>
            <ScrollView
                showsVerticalScrollIndicator = {false}
                style = {{ marginBottom : 150}}
            >   
            {
                feedList.map((item, index) => ( 
                    <View
                        key = {`FeedCard-${item.id}`}   
                    >
                        <HorizontalFoodCard
                            containerStyle = {{
                                height : 130,
                                alignItems : 'center',
                                marginHorizontal : SIZES.padding,
                                marginBottom : SIZES.radius
                            }}
                            imageStyle = {{
                                marginTop : 20,
                                height : 120,
                                width : 120
                            }}
                            item = {item}
                            onPress = {() => console.log("HorizontalFoodCard")}
                        />

                    </View>
                ))
            }

            </ScrollView>
        </View>
    )
}