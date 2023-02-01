import { View, Text } from 'react-native'
import React from 'react'
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


export default function Feed() {
  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
})

const borderRadius = Animated.interpolateNode(progress, {
    inputRange : [0, 1],
    outputRange : [0, 26]
})

  const animatStyle = { borderRadius , transform : [{ scale }] , overflow: 'hidden' }

  return (
    <View style = {{backgroundColor : 'white', flex :1 , height: "100%"}}>
    <Animated.View style={ animatStyle}>
      <View style ={{backgroundColor : 'orange' , height :'100%'}} >
        <Text >Feed Screen</Text>
      </View>
    </Animated.View>
    </View>
  );
}