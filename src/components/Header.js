import React, {Component} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.contentView, {flexDirection: 'row'}]}>
          <Image
            source={require('@Images/left-arrow.png')}
            style={styles.leftArrowIcon}
          />
          <Image
            source={require('@Images/account-64x64.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.middleView}>
          <Text style={styles.header}>Profile</Text>
        </View>
        <View style={styles.rightView}>
          <Image
            source={require('@Images/like-64x64.png')}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#31ab13',
  },
  contentView: {
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  leftArrowIcon: {tintColor: 'white', height: 20, width: 20, marginRight: 10},
  icon: {height: 20, width: 20},
  middleView: {flex: 0.6, justifyContent: 'center', alignItems: 'center'},
  header: {color: 'white', fontSize: 16},
});
