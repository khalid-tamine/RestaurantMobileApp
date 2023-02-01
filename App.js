import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {useFonts} from "expo-font";
import CustomDrawer from './navigation/CustomDrawer';
import { createStackNavigator } from '@react-navigation/stack';

//redux 
import { Provider } from 'react-redux';
import store from './stores/store';



const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }else{
    SplashScreen.hideAsync();
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={CustomDrawer} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
