import React from 'react'
import { View, Text  , TouchableWithoutFeedback, Image, FlatList } from 'react-native'
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated , {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';
import { useDispatch , useSelector } from 'react-redux';
import { setSelectedTab , selectSelectedTab } from '../stores/tab/tabReducer';
import { COLORS, SIZES, FONTS, icons , constants} from '../constants';
import { Home , Search , CartTab , Favourite , Notification } from '../screens';
import { Header } from '../components';
import { LinearGradient } from 'expo-linear-gradient';



const TabButton = ({label , icon , isFocused , outerContainerStyle , innerContainerStyle , onPress}) => {
    return (
      <TouchableWithoutFeedback onPress = {onPress}>
        <Animated.View
          style = {[
            {
              flex: 1,
              alignItems : 'center',
              justifyContent : 'center',
            },
              outerContainerStyle  
        ]}
        >
          <Animated.View
            style = {[{
              flexDirection : 'row',
              width : '80%',
              height : 50,
              alignItems : 'center',
              justifyContent : 'center',
              borderRadius :25,
            },
              innerContainerStyle
            ]}
          >
            <Image
              source = {icon}
              resizeMode = "contain"
              style = {{
                width : 20,
                height : 20,
                tintColor : isFocused? COLORS.white : COLORS.gray,
              }}
            />
            { isFocused &&
              <Text numberOfLines={1} style = {{ marginLeft : 5 , color : COLORS.white , ...FONTS.h3 }}>{label}</Text>
            }
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
)}


export default function MainLayout({navigation}) {

  const flatListRef  = React.createRef();

  //Reanimated Shared Value

  const homeTabFlex = useSharedValue(1);
  const homeTabColor = useSharedValue(COLORS.white);
  const searchTabFlex = useSharedValue(1);
  const searchTabColor = useSharedValue(COLORS.white);
  const cartTabFlex = useSharedValue(1);
  const cartTabColor = useSharedValue(COLORS.white);
  const favouriteTabFlex = useSharedValue(1);
  const favouriteTabColor = useSharedValue(COLORS.white);
  const notificationTabFlex = useSharedValue(1);
  const notificationTabColor = useSharedValue(COLORS.white);

  //Reanimated Animated Style

  const homeFlexStyle = useAnimatedStyle(() => {
    return {
      flex : homeTabFlex.value,
    }
  })
  const homeColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : homeTabColor.value,
    }
  })
  const searchFlexStyle = useAnimatedStyle(() => {
    return {
      flex : searchTabFlex.value,
    }
  })
  const searchColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : searchTabColor.value,
    }
  })
  const cartFlexStyle = useAnimatedStyle(() => {
    return {
      flex : cartTabFlex.value,
    }
  })
  const cartColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : cartTabColor.value,
    }
  })
  const favouriteFlexStyle = useAnimatedStyle(() => {
    return {
      flex : favouriteTabFlex.value,
    }
  })
  const favouriteColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : favouriteTabColor.value,
    }
  })
  const notificationFlexStyle = useAnimatedStyle(() => {
    return {
      flex : notificationTabFlex.value,
    }
  })
  const notificationColorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : notificationTabColor.value,
    }
  })

  


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

  const selectedTab = useSelector(selectSelectedTab);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setSelectedTab(constants.screens.home))
    
  }, [])

   React.useEffect(() => {
      if(selectedTab === constants.screens.home){
        //to render component inside the body
        if (flatListRef !== null && flatListRef.current !== null){
          flatListRef.current.scrollToIndex({index : 0 , animated : false});
        }
        //animation of bottom tab
        homeTabFlex.value = withTiming(4, {duration : 200});
        homeTabColor.value = withTiming(COLORS.primary, {duration : 200});
      }else {
        homeTabFlex.value = withTiming(1, {duration : 200});
        homeTabColor.value = withTiming(COLORS.white, {duration : 200});
      }
      if(selectedTab === constants.screens.search){
        if (flatListRef !== null && flatListRef.current !== null){
          flatListRef.current.scrollToIndex({index : 1 , animated : false});
        }
        searchTabFlex.value = withTiming(4, {duration : 200});
        searchTabColor.value = withTiming(COLORS.primary, {duration : 200});
      }else {
        searchTabFlex.value = withTiming(1, {duration : 200});
        searchTabColor.value = withTiming(COLORS.white, {duration : 200});
      }
      if(selectedTab === constants.screens.cart){
        if (flatListRef !== null && flatListRef.current !== null){
          flatListRef.current.scrollToIndex({index : 2 , animated : false});
        }
        cartTabFlex.value = withTiming(4, {duration : 200});
        cartTabColor.value = withTiming(COLORS.primary, {duration : 200});
      }else {
        cartTabFlex.value = withTiming(1, {duration : 200});
        cartTabColor.value = withTiming(COLORS.white, {duration : 200});
      }
      if(selectedTab === constants.screens.favourite){
        if (flatListRef !== null && flatListRef.current !== null){
          flatListRef.current.scrollToIndex({index : 3 , animated : false});
        }
        favouriteTabFlex.value = withTiming(4, {duration : 200});
        favouriteTabColor.value = withTiming(COLORS.primary, {duration : 200});
      }else {
        favouriteTabFlex.value = withTiming(1, {duration : 200});
        favouriteTabColor.value = withTiming(COLORS.white, {duration : 200});
      }
      if(selectedTab === constants.screens.notification){
        if (flatListRef !== null && flatListRef.current !== null){
          flatListRef.current.scrollToIndex({index : 4 , animated : false});
        }
        notificationTabFlex.value = withTiming(4, {duration : 200});
        notificationTabColor.value = withTiming(COLORS.primary, {duration : 200});
      }else {
        notificationTabFlex.value = withTiming(1, {duration : 200});
        notificationTabColor.value = withTiming(COLORS.white, {duration : 200});
      }

  }, [selectedTab]) 


  return (
    <View style = {{backgroundColor : COLORS.lightOrange2, flex :1 , height: "100%"}}>
    <Animated.View style={animatStyle }>
     <View style = {{height :'100%' , backgroundColor : COLORS.white}} >

    
      {/*Header*/}
      <Header 
        containerStyle = {{
            height : 50,
            paddingHorizontal : SIZES.padding,
            marginTop : 40,
            alignItems : 'center',
        }}
          title = {selectedTab.toUpperCase()}
          navigation = {navigation}            
      />

      {/*Body*/}
      <View style = {{ flex : 1 }}>
        <FlatList
          ref={flatListRef}
          horizontal 
          scrollEnabled = {false}
          pagingEnabled
          snapToAlignment='center'
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data = {constants.bottom_tabs}
          keyExtractor = {item => `${item.id}`}
          renderItem = {({item,index}) => {
            return (
              <View style = {{ width : SIZES.width , height : SIZES.height }}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <CartTab />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && <Notification />}
              </View>
            )
          }}
        />
      </View>


      {/*Footer*/}
      <View 
        style = {{ height : 85 , justifyContent : 'flex-end' }}
      > 
        {/* Shadow */}
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[COLORS.transparent, COLORS.lightGray1]}
            style={{
              position: 'absolute',
              top: -20,
              left: 0,
              right: 0,
              height: 100,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          />

        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: SIZES.padding-6,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.white,
          }}
        >
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab == constants.screens.home}
            outerContainerStyle={homeFlexStyle}
            innerContainerStyle={homeColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.home))}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab == constants.screens.search}
            outerContainerStyle={searchFlexStyle}
            innerContainerStyle={searchColorStyle} 
            onPress={() => dispatch(setSelectedTab(constants.screens.search))}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab == constants.screens.cart}
            outerContainerStyle={cartFlexStyle}
            innerContainerStyle={cartColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.cart))}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab == constants.screens.favourite}
            outerContainerStyle={favouriteFlexStyle}
            innerContainerStyle={favouriteColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.favourite))}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab == constants.screens.notification}
            outerContainerStyle={notificationFlexStyle}
            innerContainerStyle={notificationColorStyle}
            onPress={() => dispatch(setSelectedTab(constants.screens.notification))}
          />

        </View>
      </View>
       </View>
    </Animated.View>
    </View>
  );
}