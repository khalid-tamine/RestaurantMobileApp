import React from 'react'
import { View, Text, TouchableOpacity , Image } from 'react-native'
import { FONTS , COLORS } from '../constants'

export default function TextIconButton({ containerStyle, icon, iconStyle, label, labelStyle, onPress}) {
  return (
    <TouchableOpacity
        style={{
            flexDirection : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            ...containerStyle
        }}
        onPress={onPress}
    >
        <Text 
            style={{
                ...labelStyle,
                ...FONTS.body3
            }}
        >
            {label}
        </Text>
        <Image
            source={icon}
            style={{
                marginLeft: 5,
                width: 20,
                height: 20,
                tintColor: COLORS.black,
                ...iconStyle
            }}
        />
    </TouchableOpacity>
  )
}