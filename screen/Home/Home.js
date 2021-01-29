import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const images = [
  'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1391487/pexels-photo-1391487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/73640/pexels-photo-73640.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const {width} = Dimensions.get('window');
const height = width * 0.6;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }
  slides = [
    {
      key: 1,
      title: 'Welcome to PPSM.',
      text: 'Select the item...',
      image: require('../../assets/images/tomatohybrid.jpeg'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../assets/images/PPSM_LOGO.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: "I'm already out of descriptions",
      image: require('../../assets/images/PPSM_BG.jpg'),
      backgroundColor: '#22bcb5',
    },
  ];

  componentDidMount() {
    this.setHeaderTitle('Home');
  }

  setHeaderTitle = (title) => {
    this.props.navigation.setOptions({
      title: title,
      headerStyle: {backgroundColor: '#0084D9'},
      headerTitleStyle: {
        color: 'white',
      },
      headerLeft: () => (
        <Icon.Button
          name="ios-menu"
          size={25}
          backgroundColor="#fff"
          color="red"
          onPress={() => {
            console.log('pressed');
          }}></Icon.Button>
      ),
    });
  };

  change = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== this.state.active) {
      this.setState({active: slide});
    }
  };

  render() {
    return (
      <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}>
        <ScrollView
          onScroll={this.change}
          pagingEnabled
          horizontal
          style={{width, height}}
          showsHorizontalScrollIndicator={false}>
          {images.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={{width, height, resizeMode: 'cover'}}
            />
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
          }}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? styles.pagingActiveText
                  : styles.pagingText
              }>
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagingText: {fontSize: width / 30, margin: 3, color: '#888'},
  pagingActiveText: {fontSize: width / 30, margin: 3, color: '#fff'},
});
