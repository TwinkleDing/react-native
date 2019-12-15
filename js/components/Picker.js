import React, {Component} from 'react';
import {View, Picker, Text} from 'react-native';
export default class Pickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'js',
    };
  }
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => {
            this.setState({language: itemValue});
            console.log(this);
          }}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text>{this.state.language}</Text>
      </View>
    );
  }
}
