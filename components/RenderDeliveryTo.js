import { View, Text, TouchableOpacity , Image } from 'react-native'
import React from 'react'
import { SIZES, COLORS, FONTS, icons } from '../constants'

export default function RenderDeliveryTo({address}) {
    return(
        <View
            style = {{
                marginTop : SIZES.padding,
                marginHorizontal : SIZES.padding,
            }}
        >
            <Text style = {{ color : COLORS.primary , ...FONTS.h3}}>DELIVERY TO</Text>
            <TouchableOpacity
                style = {{
                    flexDirection : 'row',
                    marginTop : SIZES.base,
                    alignItems : 'center',
                }}
            >
                <Text style= {{ ...FONTS.h3 }} >
                    {address}
                </Text>
                <Image
                    source = {icons.down_arrow}
                    style = {{
                        marginLeft : SIZES.base,
                        width : 20,
                        height : 20,
                    }}
                />


            </TouchableOpacity>

        </View>
    )
    }