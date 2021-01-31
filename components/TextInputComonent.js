import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';

const TextInputComponent = (props) => {
  const [value, setValue] = useState();
  return (
    <View>
      <TextInput
        setValue={value}
        onChangeText={(txt) => props.onChangeText(txt)}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default TextInputComponent;
