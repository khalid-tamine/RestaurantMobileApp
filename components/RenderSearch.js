import { View , Image , TouchableOpacity , TextInput} from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from '../constants'

export default function RenderSearch({setShowFilterModal}) {
    return (
        <View
            style= {{
                flexDirection : 'row',
                height : 40,
                alignItems : 'center',
                marginHorizontal : SIZES.padding,
                marginVertical : SIZES.base,
                paddingHorizontal : SIZES.radius,
                borderRadius : SIZES.radius,
                backgroundColor : COLORS.lightGray2
            }}
        >
            {/* Icon */}
            <Image
                source = {icons.search}
                style = {{
                    width : 20,
                    height : 20,
                    tintColor : COLORS.black
                }}  
            />
            {/* Text Input */}
            <TextInput
                style = {{
                    flex : 1,
                    marginLeft : SIZES.radius,
                    ...FONTS.body3
                }}
                placeholder = "search food ..."
                placeholderTextColor = {COLORS.black}
            />
            {/* Filter Button */}
            <TouchableOpacity
                onPress = {() => setShowFilterModal(true)}
            >   
                <Image
                    source = {icons.filter}
                    style = {{
                        width : 20,
                        height : 20,
                        tintColor : COLORS.black
                    }}
                />
            </TouchableOpacity>
        </View>
    )   
}