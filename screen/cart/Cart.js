import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Text,
  Paragraph,
  IconButton,
} from 'react-native-paper';
import {useEffect} from 'react/cjs/react.development';

const LeftContent = (props) => (
  <Avatar.Image
    {...props}
    size={45}
    source={require('../../assets/images/tomatohybrid.jpeg')}
  />
);

const Cart = (props) => {
  useEffect(() => {
    setHeaderTitle('My Cart');
  });
  const setHeaderTitle = (title) => {
    props.navigation.setOptions({
      title: title,
      headerStyle: {backgroundColor: '#0084D9'},
      headerTitleStyle: {
        color: 'white',
      },
    });
  };
  return (
    <Card style={{backgroundColor: '#dba17d', borderRadius: 5, margin: 5}}>
      <Card.Title
        title="Potato 1 bag (2 kg)"
        subtitle="₹ : 60 /-"
        left={LeftContent}
      />
      <Card.Content>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 35,
          }}>
          <IconButton
            size={24}
            icon="minus"
            onPress={() => {
              console.log('minus clicked');
            }}
          />
          <Text> 4 </Text>
          <IconButton size={24} icon="plus" />
          <View style={{position: 'absolute', right: 50}}>
            <IconButton size={24} icon="delete" color="red" />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={{padding: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Subtotal ₹ : 60 /-{' '}
          </Text>
        </View>
      </Card.Content>

      <Card.Actions>
        <Button
          onPress={() => {
            console.log('Cancel');
          }}>
          Cancel
        </Button>
        <Button
          onPress={() => {
            console.log('Continue');
            props.navigation.navigate('address');
          }}>
          Continue
        </Button>
      </Card.Actions>
    </Card>
  );
};

// const Cart = () => {
//   return (
//     <View>
//       <Card style={styles.myCard}>
//         <View style={{flexDirection: 'row', padding: 5}}>
//           <CardItem style={{alignItems: 'center'}}>
//             <Thumbnail
//               style={{
//                 width: 80,
//                 height: 80,
//               }}
//               source={require('../../assets/images/tomatohybrid.jpeg')}
//             />
//           </CardItem>

//           <View
//             style={{height: '100%', justifyContent: 'center', marginLeft: 10}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Tomato hybrid
//             </Text>
//             <Text style={{fontSize: 15}}>Weight: 1 kg</Text>
//             <Text style={{fontSize: 15}}>₹ 20.00 /-</Text>
//           </View>
//           <View
//             style={{
//               alignItems: 'center',
//               marginLeft: 90,
//               borderColor: 'red',
//               borderWidth: 1,
//             }}>
//             <Button
//               title="-"
//               onPress={() => {
//                 console.log('-');
//               }}
//             />
//             <Text style={{margin: 5}}> 3 </Text>
//             <Button
//               title="+"
//               onPress={() => {
//                 console.log('+');
//               }}
//             />
//           </View>
//         </View>
//       </Card>
//     </View>
//   );
// };

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
