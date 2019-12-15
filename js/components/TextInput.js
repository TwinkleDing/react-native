import React, {Component} from 'react';
import {View, TextInput, Text, KeyboardAvoidingView} from 'react-native';
export default class TextInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onChangeText(text) {
    this.state = {
      value: text,
    };
  }
  render() {
    return (
      <View style={{marginLeft: 20}}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={text => this.onChangeText(text)}
            keyboardType="number-pad" //类型 decimal-pad numeric email-address phone-pad visible-password
            type="number"
          />
          <Text>{this.state.value}</Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
