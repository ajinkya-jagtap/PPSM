import {View, Text} from 'react-native';
import React from 'react';
import stringsoflanguage from '../languageSelection/screenStrings';

const Verify = (props) => {
  console.log(props);
  return (
    <View>
      <Text>{stringsoflanguage.name}</Text>
    </View>
  );
};
export default Verify;
