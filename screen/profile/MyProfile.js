import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Thumbnail} from 'native-base';
import {Card, Button} from 'react-native-paper';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setHeaderTitle('My Profile');
  }

  setHeaderTitle = (title) => {
    this.props.navigation.setOptions({
      title: title,
      headerStyle: {backgroundColor: '#0084D9'},
      headerTitleStyle: {
        color: 'white',
      },
    });
  };
  render() {
    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png';

    return (
      <View>
        <View style={{alignItems: 'center', margin: 20}}>
          <Thumbnail
            style={{width: 120, height: 120, borderRadius: 120 / 2}}
            source={require('../../assets/images/user.jpeg')}
          />
        </View>
        <Card style={styles.myCard}>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={styles.myText}>9876543210</Text>
          </View>
        </Card>
        <Card style={styles.myCard}>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={styles.myText}>Sachin Jadhav</Text>
          </View>
        </Card>
        <Button
          style={styles.signOutBtn}
          icon="logout"
          mode="contained"
          onPress={() => this.props.navigation.navigate('login')}>
          Sign Out
        </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    alignItems: 'center',
    margin: 3,
  },
  myText: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 22,
  },
  signOutBtn: {
    marginTop: 70,
    margin: 10,
    backgroundColor: '#2487b5',
  },
});
