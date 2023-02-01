import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS } from '../constants'
export default function Section({title , onPress , children}) {
    return(
        <View>
            {/* Header */}
            <View
                style = {{
                    flexDirection : 'row',
                    marginHorizontal : SIZES.padding,
                    marginTop : 30,
                    marginBottom : 20,
                }}
            >
                <Text style = {{ flex : 1, ...FONTS.h3 }}>
                    {title}
                </Text>
                <TouchableOpacity
                    onPress = {onPress}
                >
                    <Text style = {{ ...FONTS.body3, color : COLORS.primary }}>
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>
            {/* Content */}
            {children}

        </View>
    )
}

