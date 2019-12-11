import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import NavigationUtil from '../navigator/NavigationUtil';
import Swiper from 'react-native-swiper';
export default class FoundPage extends Component {
  render() {
    const TabNavigator = createAppContainer(
      createMaterialTopTabNavigator(
        {
          FocusTab: {
            screen: FouceTab,
            navigationOptions: {
              title: '关注',
            },
          },
          FoundTab: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab1: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab2: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
          FoundTab3: {
            screen: FoundTab,
            navigationOptions: {
              title: '发现',
            },
          },
        },
        {
          initialRouteName: 'FoundTab',
          swipeEnabled: false,
          tabBarOptions: {
            scrollEnabled: true,
          },
        },
      ),
    );
    return (
      <View style={{flex: 1, padding: 0}}>
        <TabNavigator />
      </View>
    );
  }
}

/**
 * 顶部导航组件
 */
class FouceTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          showsPagination={false}>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
        <Text
          onPress={() => {
            NavigationUtil.goPage(
              {
                navigation: this.props.navigation,
              },
              'DetailPage',
            );
          }}>
          跳转到详情页
        </Text>
        <Text
          onPress={() => {
            console.log(this.props);
          }}>
          关注
        </Text>
      </View>
    );
  }
}
class FoundTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>222{tabLabel}</Text>
        <Text
          onPress={() => {
            NavigationUtil.goPage(
              {
                navigation: this.props.navigation,
              },
              'DetailPage',
            );
          }}>
          跳转到详情页
        </Text>
        <Text>发现</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
