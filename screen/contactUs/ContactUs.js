import {Icon, Text} from 'native-base';
import React from 'react';
import {View, Linking, TouchableOpacity, Platform} from 'react-native';

const ContactUs = () => {
  const openDial = () => {
    if (Platform.OS === 'android') {
      Linking.openURL('tel:9876543210');
    } else {
      Linking.openURL('telprompt:9876543210');
    }
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Icon name="location"></Icon>
        <Text style={{marginLeft: 10}}>Warje, Pune</Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={() => {
          openDial();
        }}>
        <Icon type="AntDesign" name="phone"></Icon>
        <Text style={{marginLeft: 10}}>9876543210</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}
        onPress={() => {
          console.log('clicked');
          Linking.openURL('mailto:ppsm1123@yopmail.com');
        }}>
        <Icon type="AntDesign" name="mail"></Icon>
        <Text style={{marginLeft: 10}}>ppsm1123@yopmail.com</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Icon type="Ionicons" name="time"></Icon>
        <Text style={{marginLeft: 10}}>09.00 AM - 07.00 PM</Text>
      </View>
    </View>
  );
};

export default ContactUs;
