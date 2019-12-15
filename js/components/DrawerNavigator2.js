import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {DrawerItems} from 'react-navigation-drawer';
class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);
export default class FoundPage extends Component {
  render() {
    return <MyApp />;
  }
}
