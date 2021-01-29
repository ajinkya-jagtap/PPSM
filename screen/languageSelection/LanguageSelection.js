import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import stringsoflanguage from './screenStrings';

class LanguageSelection extends React.Component {
  constructor(props) {
    super(props);

    const lang = [
      {shortform: 'hi', longform: 'Hindi'},
      {shortform: 'ma', longform: 'Marathi'},
      {shortform: 'en', longform: 'English'},
    ];
    global.lang = lang;
  }

  settext(value) {
    stringsoflanguage.setLanguage(value);
    this.props.navigation.navigate('', {JSON_Clicked_Item: value});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Please select preffered language</Text>
        <ScrollView style={{marginTop: 30, width: '80%'}}>
          {global.lang.map((item, key) => {
            <View key={key}>
              <Text
                ref={item.shortform}
                onPress={() => this.settext(item.shortform)}>
                {item.longform}
              </Text>
            </View>;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default LanguageSelection;
