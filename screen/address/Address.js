/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import TextInputComponent from '../../components/TextInputComonent';
import {Text, TextInput, Button} from 'react-native-paper';

const Address = (props) => {
  const [name, setName] = React.useState('Full name');
  const [phoneNumber, setPhoneNumber] = React.useState('0123456789');
  const [address, setAddress] = React.useState('Full address');
  const [city, setCity] = React.useState('city name');
  const [pincode, setPinCode] = React.useState('postal code');

  console.log('name', name);

  return (
    <View style={{margin: 5, borderWidth: 1, borderColor: 'red'}}>
      <Text style={{fontWeight: 'bold', padding: 5}}>Address</Text>
      <TextInputComponent
        placeholder={name}
        onChangeText={(txt) => setName(txt)}
      />
      <TextInputComponent
        placeholder={phoneNumber}
        onChangeText={(txt) => setPhoneNumber(txt)}
      />
      <TextInputComponent
        placeholder={address}
        onChangeText={(txt) => setAddress(txt)}
      />
      <TextInputComponent
        placeholder={city}
        onChangeText={(txt) => setCity(txt)}
      />
      <TextInputComponent
        placeholder={pincode}
        onChangeText={(txt) => setPinCode(txt)}
      />
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate('checkout')}>
        Continue
      </Button>
    </View>
  );
};

export default Address;
