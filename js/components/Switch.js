import React, {Component} from 'react';
import {View, Switch, Text} from 'react-native';
export default class Switchs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
    };
  }
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <Switch
          value={this.state.value}
          style={{height: 50, width: 150}}
          onValueChange={itemValue => {
            this.setState({value: itemValue});
            console.log(itemValue);
          }}
        />
        <Text>{this.state.value ? 'true' : 'false'}</Text>
      </View>
    );
  }
}
