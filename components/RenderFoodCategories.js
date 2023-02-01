import { View, Text , ScrollView , TouchableOpacity ,Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS } from '../constants'

export default function RenderFoodCategories({categories ,selectedCategoryId, setSelectedCategoryId, handleChangeCategory}){
    return(
        <View>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator = {false}
            
       >
        {
            categories.map((item, index) => (
                <View
                    key = {`FcCard-${item.id}`}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection : 'row',
                            height : 55,
                            marginTop : SIZES.padding,
                            marginLeft : index == 0 ? SIZES.padding : 20,
                            marginRight : index == categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal : 8,
                            borderRadius : SIZES.radius,
                            backgroundColor : selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2,
                        }}
                        onPress = {() => {
                            
                            var startTime = performance.now()
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id)
                            var endTime = performance.now()

                            console.log(`Call to change category took ${endTime - startTime} milliseconds`)
                            
                        }}
                    >
                        <Image
                            source = {item.icon}
                            style = {{
                                marginTop : 5,
                                width : 50,
                                height : 50,
                            }}
                        />
                        <Text   
                            style = {{
                                alignSelf : 'center',
                                marginRight : SIZES.base,
                                color : selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>


                    </TouchableOpacity>
                </View>
            ))
        }

       </ScrollView>
    </View>
     
)
}