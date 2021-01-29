/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  View,
  StyleSheet,
  Button,
  Dimensions,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  {
    key: 'A',
    name: 'Tomato hybrid',
    url: require('../../assets/images/tomatohybrid.jpeg'),
    price: '45',
    originalPrice: '50',
  },
  {
    key: 'B',
    name: 'Garlic',
    url: require('../../assets/images/tomatohybrid.jpeg'),
    price: '12',
    originalPrice: '15',
  },
  {
    key: 'C',
    name: 'Onion',
    url: require('../../assets/images/tomatohybrid.jpeg'),
    price: '24',
    originalPrice: '30',
  },
  {
    key: 'D',
    name: 'Lady Finger',
    url: require('../../assets/images/tomatohybrid.jpeg'),
    price: '35',
    originalPrice: '40',
  },
];

const numOfColumns = 2;

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numOfElementsLastRow = data.length - numberOfFullRows * numColumns;

  while (numOfElementsLastRow !== numColumns) {
    data.push({
      key: `blank-${numOfElementsLastRow}`,
      empty: true,
    });
    numOfElementsLastRow = numOfElementsLastRow + 1;
  }
  return data;
};

export default class ListOfVegetables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }
  componentDidMount() {
    this.setHeaderTitle('List Of Vegetables');
  }

  setHeaderTitle = (title) => {
    this.props.navigation.setOptions({
      title: title,
      headerStyle: {backgroundColor: '#0084D9'},
      headerTitleStyle: {
        color: 'white',
      },
      headerRight: () => (
        <IconAntDesign
          name="shoppingcart"
          size={25}
          onPress={() => {
            console.log('cart pressed');
            this.props.navigation.navigate('cart');
          }}
          style={{
            padding: 20,
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}></IconAntDesign>
      ),
    });
  };

  renderItem = ({item, index}) => {
    // if (item.empty === true) {
    //   return <View style={[styles.item, styles.itemInvisible]}></View>;
    // }
    return (
      <View style={styles.item} elevation={5}>
        {/* <ImageBackground
          source={{
            uri: item.url,
          }}
          style={{
            height: '100%',
            width: '100%',
            position: 'relative', // because it's parent
            top: 2,
            left: 2,
          }}>
          <Text style={styles.itemText}>{item.name}</Text>
        </ImageBackground> */}

        <View style={styles.imageView}>
          <Image source={item.url} style={styles.image}></Image>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.nameText}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.priceText}> ₹ : {item.price}</Text>
            <Text style={styles.oldPriceText}> ₹ : {item.price}</Text>
          </View>

          <Button
            title="Add to cart"
            color="transparent"
            style={{margin: 5}}
            onPress={() => {
              console.log('Btn pressed');
            }}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <IconAntDesign
            name="right"
            size={20}
            style={{
              padding: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}></IconAntDesign>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(txt) => {
            this.setState({searchQuery: txt});
          }}
          value={this.state.searchQuery}
        />
        <FlatList
          // data={formatData(data, numOfColumns)}
          data={data}
          renderItem={this.renderItem}
          // numColumns={numOfColumns}
          style={styles.container}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  item: {
    flex: 1,
    margin: 1,
    flexDirection: 'row',
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  imageView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 90, height: 90, borderRadius: 45},
  nameText: {margin: 10, fontSize: 20, fontWeight: 'bold'},
  priceText: {margin: 10, fontSize: 15, fontWeight: 'bold'},
  oldPriceText: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
});
