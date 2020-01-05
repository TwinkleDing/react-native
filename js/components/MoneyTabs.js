import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from '../components/Icon/MyIcon';
export default class Pickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showYear: new Date().getFullYear(),
      showMonth:
        new Date().getMonth() < 9
          ? '0' + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1,
      showDay: new Date().getDate(),
    };
  }
  openMenu = () => {
    this.props.navigation.openDrawer();
  };
  week() {
    let week = ['日', '一', '二', '三', '四', '五', '六'].map(item => {
      <Text>{item}</Text>;
    });
    return week;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Icon onPress={this.openMenu} name={'found'} size={26} />
          <Text style={{fontSize: 20}}>记账本</Text>
          <Icon name={'game'} size={26} />
        </View>
        <View style={styles.content}>
          <View style={styles.time}>
            <View style={styles.timeTitle}>
              <Icon name={'game'} size={26} />
              <View>
                <Text>
                  {this.state.showYear}年{this.state.showMonth}月
                </Text>
              </View>
              <Icon name={'game'} size={26} />
            </View>
            <View style={styles.timeContent}>
              <View>{this.week()}</View>
            </View>
          </View>
          <View style={styles.list} />
        </View>
        <View style={styles.form}>
          <Text>sss</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5FCFF',
    position: 'relative',
    padding: 10,
  },
  title: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 40,
  },
  content: {
    height: 'auto',
    flex: 1,
  },
  form: {
    height: 180,
    backgroundColor: '#acc',
  },
  menu: {
    color: '#eee',
    backgroundColor: 'rgba(40, 126, 224, 0.924)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(40, 126, 224, 0.524)',
    padding: 10,
    borderRadius: 15,
    textAlign: 'center',
    width: 100,
  },
  time: {
    backgroundColor: '#acc',
    height: 300,
  },
  timeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  timeContent: {
    backgroundColor: '#666',
    flex: 1,
  },
  list: {
    backgroundColor: '#ac0',
    flex: 1,
  },
});
