import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'

export default function TextButton({ label, labelStyle, buttonContainerStyle, onPress }) {
  return (
    <TouchableOpacity
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...buttonContainerStyle 
        }}
        onPress={onPress}
    >
        <Text style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}>{label}</Text> 

    </TouchableOpacity>
  )
}