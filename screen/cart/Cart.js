import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Card} from 'react-native-paper';
import {CardItem, Icon, Thumbnail} from 'native-base';

const Cart = () => {
  return (
    <View>
      <Card style={styles.myCard}>
        <View style={{flexDirection: 'row', padding: 5}}>
          <CardItem style={{alignItems: 'center'}}>
            <Thumbnail
              style={{
                width: 80,
                height: 80,
              }}
              source={require('../../assets/images/tomatohybrid.jpeg')}
            />
          </CardItem>

          <View
            style={{height: '100%', justifyContent: 'center', marginLeft: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Tomato hybrid
            </Text>
            <Text style={{fontSize: 15}}>Weight: 1 kg</Text>
            <Text style={{fontSize: 15}}>₹ 20.00 /-</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 90,
              borderColor: 'red',
              borderWidth: 1,
            }}>
            <Button
              title="-"
              onPress={() => {
                console.log('-');
              }}
            />
            <Text style={{margin: 5}}> 3 </Text>
            <Button
              title="+"
              onPress={() => {
                console.log('+');
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 5,
    padding: 5,
  },
  myText: {
    marginLeft: 5,
    marginTop: 5,
    fontSize: 22,
  },
});

export default Cart;
