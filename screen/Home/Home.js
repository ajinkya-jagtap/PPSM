import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button, Searchbar, ProgressBar, Colors} from 'react-native-paper';

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
      headerStyle: {backgroundColor: '#ffffff'},
      headerTitleStyle: {
        color: 'red',
      },
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
      <View style={{flex: 1}}>
        <Searchbar
          style={{padding: 5}}
          placeholder="Search"
          onChangeText={(txt) => {
            this.setState({searchQuery: txt});
          }}
          value={this.state.searchQuery}
        />
        <View>
          <ScrollView
            onScroll={this.change}
            pagingEnabled
            horizontal
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
              alignSelf: 'center',
              marginTop: 220,
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

        <ScrollView style={{}}>
          <Card
            style={{padding: 5}}
            onPress={() => {
              this.props.navigation.navigate('listOfVegetables');
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
              }}
              style={{
                height: 100,
                width: '100%',
                position: 'relative', // because it's parent
                top: 2,
                left: 2,
              }}>
              <View style={{margin: 5}}>
                <ProgressBar
                  progress={0.2}
                  color={Colors.red800}
                  backgroundColor={Colors.white}
                />
              </View>

              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                  bottom: 0, // position where you want
                  left: 0,
                  fontSize: 30,
                }}>
                Vegetables
              </Text>
            </ImageBackground>
          </Card>
          <Card
            style={{padding: 5}}
            onPress={() => {
              this.props.navigation.navigate('listOfVegetables');
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
              }}
              style={{
                height: 100,
                width: '100%',
                position: 'relative', // because it's parent
                top: 2,
                left: 2,
              }}>
              <View style={{margin: 5}}>
                <ProgressBar
                  progress={0.5}
                  color={Colors.red800}
                  backgroundColor={Colors.white}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                  bottom: 0, // position where you want
                  left: 0,
                  fontSize: 30,
                }}>
                Fruits
              </Text>
            </ImageBackground>
          </Card>
          <Card
            style={{padding: 5}}
            onPress={() => {
              this.props.navigation.navigate('listOfVegetables');
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
              }}
              style={{
                height: 100,
                width: '100%',
                position: 'relative', // because it's parent
                top: 2,
                left: 2,
              }}>
              <View style={{margin: 5}}>
                <ProgressBar
                  progress={0.3}
                  color={Colors.red800}
                  backgroundColor={Colors.white}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                  bottom: 0, // position where you want
                  left: 0,
                  fontSize: 30,
                }}>
                Leafy Vegetables
              </Text>
            </ImageBackground>
          </Card>
          <Card
            style={{padding: 5}}
            onPress={() => {
              this.props.navigation.navigate('listOfVegetables');
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shopping-bag-full-of-fresh-vegetables-and-fruits-royalty-free-image-1128687123-1564523576.jpg',
              }}
              style={{
                height: 100,
                width: '100%',
                position: 'relative', // because it's parent
                top: 2,
                left: 2,
              }}>
              <View style={{margin: 5}}>
                <ProgressBar
                  progress={0.7}
                  color={Colors.red800}
                  backgroundColor={Colors.white}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  position: 'absolute', // child
                  bottom: 0, // position where you want
                  left: 0,
                  fontSize: 30,
                }}>
                Grains
              </Text>
            </ImageBackground>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pagingText: {fontSize: width / 30, margin: 3, color: '#888'},
  pagingActiveText: {fontSize: width / 30, margin: 3, color: '#fff'},
});
