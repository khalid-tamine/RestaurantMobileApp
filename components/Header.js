import React from 'react'
import { View, Text, TouchableOpacity , Image } from 'react-native';
import { icons, COLORS, SIZES, FONTS } from '../constants'
import dummyData from '../constants/dummyData';

const LeftComponent = ({navigation}) => {
    return (
      <View>
        <TouchableOpacity
            style = {{
                width : 40,
                height : 40,
                alignItems : 'center',
                justifyContent : 'center',
                borderWidth : 1,
                borderColor : COLORS.gray2,
                borderRadius : SIZES.radius,
            }}
            onPress = {() => navigation.openDrawer() }
            >
              <Image  
                  source = {icons.menu}
                />
          </TouchableOpacity>
      </View>
    )
  }
  
  const RightComponent = () => {
    return (
      <View>
        <TouchableOpacity
            style = {{
                borderRadius : SIZES.radius,
                alignItems : 'center',
                justifyContent : 'center',
            }}
          >
            <Image
                source = {dummyData?.myProfile?.profile_image}
                style = {{
                    width : 40,
                    height : 40,
                    borderRadius : SIZES.radius,
                }}
            />
        </TouchableOpacity>
      </View>
    )
  }

export default function Header({containerStyle, title , navigation}) {
  return (
    <View
        style={{
            flexDirection: 'row',
            ...containerStyle
        }}
    >
        {/* Left */}
       <LeftComponent navigation={navigation} />

        {/* Title */}
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ ...FONTS.h3 }}>{title}</Text>
        </View>
        {/* Right */}
        <RightComponent />
    </View>
  )
}