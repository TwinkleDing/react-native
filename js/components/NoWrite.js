import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ProgressBars extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ScrollView</Text>
        <Text>
          一个封装了平台的ScrollView（滚动视图）的组件，同时还集成了触摸锁定的“响应者”系统。
        </Text>
        <Text>RefreshControl</Text>
        <Text>
          这一组件可以用在ScrollView或FlatList内部，为其添加下拉刷新的功能
        </Text>
        <Text>SafeAreaView</Text>
        <Text>SafeAreaView的目的是在一个“安全”的可视区域内渲染内容。</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
