import React from 'react';
import {
  Container,
  Text,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
} from 'native-base';

import Catagories from '../catagories/Catagories';
import Home from '../Home/Home';
import MyProfile from '../profile/MyProfile';
import ContactUs from '../contactUs/ContactUs';
import Cart from '../cart/Cart';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedTab: 'catagories'};
  }

  getTabsInfo = () => {
    console.log('selectedTab', this.state.selectedTab);

    switch (this.state.selectedTab) {
      case 'catagories':
        return <Catagories navigation={this.props.navigation} />;

      case 'myProfile':
        return <MyProfile navigation={this.props.navigation} />;

      case 'home':
        return <Home navigation={this.props.navigation} />;

      case 'contactUs':
        return <ContactUs navigation={this.props.navigation} />;
      case 'cart':
        return <Cart navigation={this.props.navigation} />;
    }
  };

  setHeaderTitle = (title) => {
    this.props.navigation.setOptions({
      title: title,
      headerStyle: {backgroundColor: '#0084D9'},
      headerTitleStyle: {
        color: 'white',
      },
    });
  };

  componentDidMount() {
    this.setHeaderTitle('Catagories');
  }

  componentDidUpdate(prevProps) {
    switch (this.state.selectedTab) {
      case 'catagories':
        this.setHeaderTitle('Catagories');
        break;
      case 'home':
        this.setHeaderTitle('Home');
        break;
      case 'myProfile':
        this.setHeaderTitle('My Profile');
        break;
      case 'contactUs':
        this.setHeaderTitle('Contact Us');
        break;
      case 'cart':
        this.setHeaderTitle('Cart');
        break;
      default:
        this.setHeaderTitle('Catagories');
        break;
    }
  }

  render() {
    return (
      <Container>
        <Content>{this.getTabsInfo()}</Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#0084D9'}}>
            <Button
              active={this.state.selectedTab === 'catagories'}
              onPress={() => this.setState({selectedTab: 'catagories'})}>
              <Icon type="MaterialCommunityIcons" name="format-list-bulleted" />
              <Text style={{fontSize: 9}}>Catago.</Text>
            </Button>
            <Button
              active={this.state.selectedTab === 'home'}
              onPress={() => this.setState({selectedTab: 'home'})}>
              <Icon type="MaterialIcons" name="home" />
              <Text style={{fontSize: 9}}>Home</Text>
            </Button>
            <Button
              active={this.state.selectedTab === 'cart'}
              icon="add"
              onPress={() => this.setState({selectedTab: 'cart'})}>
              <Icon type="MaterialIcons" name="contact-phone" />
              <Text style={{fontSize: 9}}>Cart</Text>
            </Button>
            <Button
              active={this.state.selectedTab === 'myProfile'}
              icon="add"
              onPress={() => this.setState({selectedTab: 'myProfile'})}>
              <Icon type="MaterialCommunityIcons" name="account" />
              <Text style={{fontSize: 9}}>Profile</Text>
            </Button>
            <Button
              active={this.state.selectedTab === 'contactUs'}
              icon="add"
              onPress={() => this.setState({selectedTab: 'contactUs'})}>
              <Icon type="MaterialIcons" name="contact-phone" />
              <Text style={{fontSize: 9}}>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Tabs;
