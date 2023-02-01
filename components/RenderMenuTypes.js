import { View, Text , TouchableOpacity , ScrollView } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS } from '../constants'
export default function RenderMenuTypes({selectedMenuType, setSelectedMenuType, menu, handleChangeMenu}) {
    return(
        <View>
           <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
           >
            {
                menu.map((item, index) => (
                    <View
                        key={`MnCard-${item.id}`}
                        style = {{
                            marginTop: 30,
                            marginBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == menu.length - 1 ? SIZES.padding : 0,
                        }}
                        onPress={() => { 
                            var startTime = performance.now()
                            setSelectedMenuType(item.id)
                            handleChangeMenu(item.id)
                            var endTime = performance.now()

                            console.log(`Call to change menu took ${endTime - startTime} milliseconds`)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
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