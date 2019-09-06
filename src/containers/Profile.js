import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from '@components/Header';
const {width, height} = Dimensions.get('window');

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={[styles.container, {backgroundColor: '#e6e6e6'}]}>
          <ImageBackground
            source={require('@Images/dashboard-bg.png')}
            style={{height: height, width: width}}>
            <View style={{flex: 1}}>
              {/* <View style={{height: 60, backgroundColor: 'pink'}} />*/}
              <View
                style={{
                  height: width / 5.35,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: width / 9.37,
                    width: width / 1.78,
                    borderRadius: 20,
                    flexDirection: 'row',
                    borderWidth: 0.5,
                    borderColor: '#31ab13',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 15,
                  }}>
                  <Image
                    source={require('@Images/pencil-outline.png')}
                    style={styles.icon}
                  />
                  <Text style={{color: '#31ab13'}}>Edit Personal Details</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 100,
                  marginHorizontal: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View style={{flex: 0.3, alignItems: 'center'}}>
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      backgroundColor: 'red',
                      borderRadius: 30,
                    }}
                  />
                </View>
                <View style={{flex: 0.7, alignItems: 'flex-start'}}>
                  <Text style={{color: '#31ab13', fontSize: 20}}>
                    Mahendra Singh Dhoni
                  </Text>
                  <Text>Last Login: 22-07-2019 07:23am </Text>
                </View>
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 150,
                  marginHorizontal: 15,
                  backgroundColor: 'white',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <View style={{flex: 0.1, alignItems: 'center'}}>
                    <Image
                      source={require('@Images/email.png')}
                      style={styles.icon}
                    />
                  </View>
                  <View style={{flex: 0.9, alignItems: 'flex-start'}}>
                    <Text>dhoni@gmail.com</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  <View style={{flex: 0.1, alignItems: 'center'}}>
                    <Image
                      source={require('@Images/location-new.png')}
                      style={styles.icon}
                    />
                  </View>
                  <View style={{flex: 0.9, alignItems: 'flex-start'}}>
                    <Text>
                      Jadavpur University Gate No. 2, Jadavpur University Campus
                      Area, Jadavpur, Kolkata, West Bengal, India
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginHorizontal: 15}}>
                <TouchableOpacity
                  style={{
                    height: width / 9.37,
                    width: width / 1.13,
                    borderRadius: 10,
                    flexDirection: 'row',
                    borderWidth: 0.5,
                    borderColor: '#31ab13',
                    backgroundColor: '#31ab13',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    marginTop: 20,
                  }}>
                  <Image
                    source={require('@Images/settings.png')}
                    style={styles.icon}
                  />
                  <Text style={{color: 'white', fontSize: 16}}>
                    EDIT FILTER OPTION
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  height: 70,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text>Want to change password?</Text>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 100,
                    borderRadius: 20,
                    borderWidth: 0.5,
                    borderColor: '#31ab13',
                    backgroundColor: '#31ab13',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text style={{color: 'white'}}>Change</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 100,
                  borderRadius: 20,
                  borderWidth: 0.5,
                  borderColor: '#31ab13',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#31ab13'}}>logout</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 44,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});
