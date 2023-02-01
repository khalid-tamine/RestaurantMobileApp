import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { icons, COLORS, SIZES, FONTS } from '../constants'


export default function HorizontalFoodCard({ containerStyle, imageStyle , item , onPress }) {
  return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle
        }}
        onPress = {onPress}
    >
        {/* Image */}
        <Image
            source = {item.image}
            style = {imageStyle}
        />
        {/* Info */}
        <View
            style = {{
                flex : 1,
            }}
        >
            {/* Name */}
            <Text style = {{ ...FONTS.h3, fontSize : 17 }}>
                {item.name}
            </Text>
            {/* Description */}
            <Text style = {{ ...FONTS.body4, color : COLORS.gray, marginTop : 3 }}>
                {item.description}
            </Text>
            {/* Price */}
            <Text style = {{ ...FONTS.h3, color : COLORS.primary, marginTop : 3 }}>
                ${item.price}
            </Text>
            {/* Calories */}    
            <View
                style = {{
                    flexDirection : 'row',
                    position : 'absolute',
                    top : -18,
                    right : SIZES.radius,
                }}
            >
                <Image
                    source = {icons.calories}
                    style = {{
                        width : 20,
                        height : 20,
                    }}
                />
                    <Text style = {{ ...FONTS.body4, color : COLORS.primary, marginLeft : 5 }}>
                        {item.calories} cal
                    </Text>
            </View>

        </View>
    </TouchableOpacity>
  )
}