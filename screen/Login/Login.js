/* eslint-disable react-native/no-inline-styles */
import {firebase} from '@react-native-firebase/auth';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Modal,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
// import firebaseSetup from '../../setupFirebase/Setup';
import auth from '@react-native-firebase/auth';
import {Title} from 'native-base';
import bgimgTwo from '../../assets/images/bggggg.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const Login = (props) => {
  console.log('props', props);
  // const {auth} = firebaseSetup();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const signInWithPhoneNumber = async (pn) => {
    console.log(pn);
    try {
      const confirmation = await auth().signInWithPhoneNumber('+91' + pn);
      // this.setState({confirm: confirmation});
      setConfirm(confirmation);
      console.log('confirmation', confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmCode = async () => {
    try {
      setModalOpen(true);
      // const confirmationStatus = await confirm.confirm(otpValue);
      // console.log('confirmationStatus', confirmationStatus);

      setModalOpen(false);
      props.navigation.navigate('intro');

      // setTimeout(() => {
      //   this.setState({modalOpen: false});
      //   this.props.navigation.navigate('intro');
      // }, 2000);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <ImageBackground source={bgimgTwo} style={styles.view}>
      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#cf6165',
              width: Dimensions.get('window').width * 0.7,
              height: Dimensions.get('window').height * 0.2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{margin: 10, fontWeight: 'bold'}}>Please Wait...</Text>
            <ActivityIndicator size="large" color="black"></ActivityIndicator>
          </View>
        </View>
      </Modal>
      <View style={styles.displayText}>
        <Text style={{fontSize: 45}}>PPSM APP</Text>
        <Text style={{fontSize: 20}}>Login With Number</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              margin: 10,
              backgroundColor: 'transparent',
              width: '80%',
            }}
            keyboardType="number-pad"
            label="Enter Number here"
            maxLength={10}
            value={phoneNumber}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            theme={{
              colors: {
                placeholder: 'black',
                text: 'black',
                primary: 'black',
                underlineColor: 'transparent',
                background: '#003489',
              },
            }}
          />
          <Icon name={'keypad-outline'} size={28}></Icon>
        </View>

        <Button
          style={{margin: 10}}
          mode="text"
          onPress={() => signInWithPhoneNumber(phoneNumber)}>
          GET OTP
        </Button>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              margin: 10,
              backgroundColor: 'transparent',
              width: '80%',
            }}
            theme={{
              colors: {
                placeholder: 'black',
                text: 'black',
                primary: 'black',
                underlineColor: 'transparent',
                background: '#003489',
              },
            }}
            keyboardType="number-pad"
            maxLength={6}
            label="Enter OTP here"
            value={otpValue}
            onChangeText={(text) => {
              setOtpValue(text);
            }}
          />
          <Icon name={'keypad-outline'} size={28}></Icon>
        </View>

        <Button
          style={{margin: 10}}
          mode="text"
          onPress={() => {
            confirmCode();
          }}>
          CONFIRM OTP
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  displayText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
    margin: 10,
  },
});

export default Login;
