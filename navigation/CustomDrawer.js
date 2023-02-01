import React from 'react';
import { View, Text , TouchableOpacity , Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { COLORS, SIZES, FONTS, icons , constants} from '../constants';
import Test from '../Test';
import MainLayout from '../screens/MainLayout';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTab , selectSelectedTab } from '../stores/tab/tabReducer';
import dummyData from '../constants/dummyData';


const Drawer = createDrawerNavigator();


function CustomDrawerItem ({label , icon  , onPress , isFocused}){

    return (
        <TouchableOpacity
            style = {{ flexDirection : 'row', height : 40 , marginBottom : SIZES.base , alignItems : 'center' 
            , paddingLeft : SIZES.radius , borderRadius : SIZES.radius
            , backgroundColor : isFocused ? COLORS.transparentBlack1 : null }}
            onPress = {onPress}
            >
            <Image
                source = {icon}
                resizeMode = "contain"
                style = {{
                    width : 20,
                    height : 20,
                    tintColor : COLORS.black
                }}
            />
            <Text style = {{ marginLeft : 15 , color : COLORS.black , ...FONTS.h3 }}>{label}</Text>
        </TouchableOpacity>
            
    )}


function CustomDrawerContent (props) {
    const selectedTab = useSelector(selectSelectedTab);
    const dispatch = useDispatch();
    return (
        <DrawerContentScrollView
            scrollEnabled = {true}
            contentContainerStyle = {{ flex : 1 }}
            backgroundColor = "transparent"
        >
            <View style = {{ flex : 1, paddingHorizontal : SIZES.radius }}>
                
                {/* Close */}

                <View style = {{ alignItems : 'flex-start', justifyContent : 'center' }}>
                    <TouchableOpacity
                        style = {{
                            alignItems : 'center',
                            justifyContent : 'center',
                        }}
                        onPress = {() => props.navigation.closeDrawer()}
                    >
                        <Image
                            source = {icons.cross}
                            resizeMode = "contain"
                            style = {{
                                width : 28,
                                height : 28,
                                tintColor : COLORS.black
                            }}
                        />
                        
                    </TouchableOpacity>
                </View>
                    
                {/* Profile */}

                <TouchableOpacity
                    style = {{
                        flexDirection : 'row',
                        marginTop : SIZES.radius,
                        alignItems : 'center'
                    }}
                    onPress = {() => console.log("Profile")}
                >
                    <Image
                        source = {dummyData.myProfile?.profile_image}
                        style = {{
                            width : 50,
                            height : 50,
                            borderRadius : SIZES.radius
                        }}
                    />
                    <View 
                            style = {{
                                marginLeft : SIZES.radius,
                            }}
                        >
                            <Text style = {{ ...FONTS.h3, color : COLORS.black }}>{dummyData.myProfile?.name}</Text>
                            <Text style = {{ ...FONTS.body4, color : COLORS.black }}>View your profile</Text>
                    </View>
                       
                </TouchableOpacity>
                
                {/* Drawer Items */}

                <View style = {{ flex : 1, marginTop : SIZES.padding-6 }}>
                    <CustomDrawerItem 
                        label = {constants.screens.home}
                        icon = {icons.home}
                        isFocused = {selectedTab == constants.screens.home}
                        onPress = {() => {  
                            dispatch(setSelectedTab(constants.screens.home)) 
                            props.navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem 
                        label = {constants.screens.my_wallet}
                        icon = {icons.wallet} 
                    />
                    <CustomDrawerItem 
                        label = {constants.screens.notification}
                        icon = {icons.notification}
                        isFocused = {selectedTab == constants.screens.notification}
                        onPress = {() => {  
                            dispatch(setSelectedTab(constants.screens.notification)) 
                            props.navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem 
                        label = {constants.screens.favourite}
                        icon = {icons.favourite}
                        isFocused = {selectedTab == constants.screens.favourite}
                        onPress = {() => {  
                            dispatch(setSelectedTab(constants.screens.favourite)) 
                            props.navigation.navigate("MainLayout")
                        }}
                    />

                    {/* Line Divider */}
                    <View
                        style = {{
                            height : 1,
                            marginVertical : SIZES.radius-11,
                            marginBottom : SIZES.radius-3,
                            marginLeft : SIZES.radius,
                            backgroundColor : COLORS.lightGray1
                        }}
                    />
                    <CustomDrawerItem 
                        label = "Track Your Order"
                        icon = {icons.location}
                    />
                    <CustomDrawerItem 
                        label = "Coupons"
                        icon = {icons.coupon}
                    />
                    <CustomDrawerItem 
                        label = "Settings"
                        icon = {icons.setting}
                    />
                    <CustomDrawerItem 
                        label = "Invite a Friend"
                        icon = {icons.profile}
                    />
                    <CustomDrawerItem 
                        label = "Help Center"
                        icon = {icons.help}
                    />
                </View>
                <View style = {{ marginBottom : SIZES.radius-6 }}>
                    <CustomDrawerItem
                        label = "Logout"
                        icon = {icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )}




export default function CustomDrawer() {

    return (
      <Drawer.Navigator
        
        screenOptions={{ 
          headerShown : false,
          drawerType : 'slide',
          overlayColor : "transparent", 
          drawerStyle : {
            flex : 1,
            width : '65%',
            paddingRight : 20,
            backgroundColor : COLORS.lightOrange2
          },
          sceneContainerStyle : {
            backgroundColor : "transparent"
          } 
        }}
  
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props}  />}
      >
        <Drawer.Screen name="MainLayout" component={MainLayout} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
    );
  }

