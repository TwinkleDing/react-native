import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ToastAndroid,
} from 'react-native';

export default class FlatLists extends Component {
  render() {
    return (
      <View>
        <Text>FlatList列表</Text>
        <FlatList
          data={[
            {title: 'Title Text', key: 'item1'},
            {title: 'Title Text', key: 'item2'},
            {title: 'Title Text', key: 'item3'},
            {title: 'Title Text', key: 'item4'},
          ]}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              onPress={() => ToastAndroid.show(`${index}`, ToastAndroid.SHORT)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{backgroundColor: 'white'}}>
                <Text>{item.title}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}
