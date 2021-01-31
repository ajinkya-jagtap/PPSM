import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from '../screen/Login/Login';
import Home from '../screen/Home/Home';
import Verify from '../screen/Login/Verify';
import MyProfile from '../screen/profile/MyProfile';
import Tabs from '../screen/tabs/Tabs';
import ListOfVegetables from '../screen/ListOfVegetables/ListOfVegetables';
import LanguageSelection from '../screen/languageSelection/LanguageSelection';
import ContactUs from '../screen/contactUs/ContactUs';
import Cart from '../screen/cart/Cart';
import Intro from '../screen/appTour_setup/Intro';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, View} from 'react-native';
import Address from '../screen/address/Address';
import Checkout from '../screen/checkout/Checkout';
import {DrawerContent} from '../screen/drawerContent/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="home"
      component={Home}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#fff"
            color="red"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Icon.Button
              name="cart-outline"
              size={25}
              backgroundColor="#fff"
              color="red"
              onPress={() => {
                navigation.navigate('cart');
              }}
            />
            <Icon.Button
              name="heart-outline"
              size={25}
              backgroundColor="#fff"
              color="red"
              onPress={() => {
                console.log('favourite pressed');
              }}
            />
            <Icon.Button
              name="person-circle-outline"
              size={25}
              backgroundColor="#fff"
              color="red"
              onPress={() => {
                navigation.navigate('myProfile');
              }}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen name="verify" component={Verify} />
    <Stack.Screen name="tabs" component={Tabs} />
    <Stack.Screen name="listOfVegetables" component={ListOfVegetables} />
    <Stack.Screen name="languageSelection" component={LanguageSelection} />
    <Stack.Screen name="cart" component={Cart} />
    <Stack.Screen name="address" component={Address} />
    <Stack.Screen name="checkout" component={Checkout} />
  </Stack.Navigator>
);

const MyProfileStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="myProfile" component={MyProfile} />
  </Stack.Navigator>
);

const ContactUsStackScreen = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="contactUs" component={ContactUs} />
  </Stack.Navigator>
);

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

function Navigator({navigation}) {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props}></DrawerContent>}>
        <Drawer.Screen name="home" component={HomeStackScreen} />
        <Drawer.Screen name="myProfile" component={MyProfileStackScreen} />
        <Drawer.Screen name="contactUs" component={ContactUsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// const Navigator = ({navigation}) => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="intro"
//           component={Intro}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="login"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="home"
//           component={DrawerRoutes}
//           // options={{
//           //   headerLeft: () => (
//           //     <Icon.Button
//           //       name="ios-menu"
//           //       size={25}
//           //       backgroundColor="#fff"
//           //       color="red"
//           //       onPress={() => {}}></Icon.Button>
//           //   ),
//           //   headerRight: () => (
//           //     <View style={{flexDirection: 'row'}}>
//           //       <Icon.Button
//           //         name="heart-outline"
//           //         size={25}
//           //         backgroundColor="#fff"
//           //         color="red"
//           //         onPress={() => {
//           //           console.log('favourite pressed');
//           //         }}></Icon.Button>
//           //       <Icon.Button
//           //         name="person-circle-outline"
//           //         size={25}
//           //         backgroundColor="#fff"
//           //         color="red"
//           //         onPress={() => {
//           //           console.log('favourite pressed');
//           //         }}></Icon.Button>
//           //     </View>
//           //   ),
//           // }}
//         />
//         <Stack.Screen name="verify" component={Verify} />
//         <Stack.Screen name="myProfile" component={MyProfile} />
//         <Stack.Screen name="tabs" component={Tabs} />
//         <Stack.Screen name="listOfVegetables" component={ListOfVegetables} />
//         <Stack.Screen name="languageSelection" component={LanguageSelection} />
//         <Stack.Screen name="contactUs" component={ContactUs} />
//         <Stack.Screen name="cart" component={Cart} />
//         <Stack.Screen name="address" component={Address} />
//         <Stack.Screen name="checkout" component={Checkout} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const HomeStackScreen = ({navigation}) => (
//   <Stack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#0084D9',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <Stack.Screen
//       name="home"
//       component={Home}
//       options={{
//         title: 'Home',
//         headerLeft: () => (
//           <Icon.Button
//             name="ios-menu"
//             size={25}
//             backgroundColor="#0084D9"
//             onPress={() => {
//               navigation.toggleDrawer();
//             }}></Icon.Button>
//         ),
//       }}
//     />
//   </Stack.Navigator>
// );

// const tabNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="verify" component={Verify}></Tab.Screen>
//       <Tab.Screen name="myProfile" component={MyProfile}></Tab.Screen>
//     </Tab.Navigator>
//   );
// };

export default Navigator;
