import React, {Component} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class App extends Component {
  state = {
    date: new Date('2020-06-12T14:42:42'),
    mode: 'date',
    show: false,
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  };

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };

  render() {
    const {show, date, mode} = this.state;

    return (
      <View>
        <View>
          <Text onPress={this.datepicker} title="Show date picker!">
            打开日期
          </Text>
        </View>
        <View>
          <Text onPress={this.timepicker} title="Show time picker!">
            打开时间
          </Text>
        </View>
        {show && (
          <DateTimePicker
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={this.setDate}
          />
        )}
      </View>
    );
  }
}
/*
Props
https://github.com/react-native-community/react-native-datetimepicker#react-native-datetimepicker
*/
