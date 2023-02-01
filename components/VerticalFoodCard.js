import React from 'react';
import { View, Text , TouchableOpacity , Image } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants';

export default function VerticalFoodCard({ containerStyle , item , onPress }) {
  return (
    <TouchableOpacity
        
        style = {{
            width : 200,
            padding : SIZES.padding,
            alignItems : 'center',
            borderRadius : SIZES.radius,
            backgroundColor : COLORS.lightGray2,
            ...containerStyle
        }}
        onPress = {onPress}
    >
        {/* Calories && Favourites  */}
        <View
            style = {{ flexDirection : 'row' }}
        >
            {/* Calories */}
            <View
                style = {{ flex : 1, flexDirection : 'row' }}
            >
                <Image
                    source = {icons.calories}
                    style = {{
                        width : 30,
                        height : 30,
                    }}
                />
                <Text style = {{ ...FONTS.body5, color : COLORS.darkGray2, marginLeft : 5 }}>
                    {item.calories} Calories
                </Text>
            </View>
            {/* Favourites */}
            <Image
                source = {icons.love}
                style = {{
                    width : 20,
                    height : 20,
                    tintColor : item.isFavourite ? COLORS.primary : COLORS.gray,
                }}
            />
        </View>
        {/* Image */}
        <View  
            style = {{
                height : 150,
                width : 150,
                alignItems : 'center',
                justifyContent : 'center',
            }}
        >
            <Image
                source = {item.image}
                style = {{
                    height : '100%',
                    width : '100%',
                }}
            />
        </View>

        {/* Info */}
        <View
            style = {{
                alignItems : 'center',
                marginTop : -20,
            }}
        >
            {/* Name */}
            <Text style = {{ ...FONTS.h3}}>
                {item.name}
            </Text>
            {/* Description */}
            <Text style = {{ ...FONTS.body5, color : COLORS.darkGray2, textAlign : 'center', marginTop : 1 }}>
                {item.description}
            </Text>
            {/* Price */}
            <Text style = {{ ...FONTS.h3, color : COLORS.primary, marginTop : 3 }}>
                ${item.price}
            </Text>
        </View>


    </TouchableOpacity>
  )
}