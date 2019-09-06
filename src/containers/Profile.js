import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import Header from '@components/Header';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const { width, height } = Dimensions.get('window');

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: null,
      avatarSource:null,
      spinner:false
    };
    this.onSelectingImage = this.onSelectingImage.bind(this)
  }
  onSelectingImage(){
    this.setState({
      spinner:true
    })
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log("dfkjkfsdhfjkdf"+JSON.stringify(source))
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    alert("dfkjkfsdhfjkdf"+JSON.stringify(source))
        this.setState({
          avatarSource: source,
          spinner:false
        });
      }
    });
  }
  componentDidMount() {
    fetch("http://navkiraninfotech.com/Customers/custom/abode/api/my_profile_details?user_id=193&device_token=12345678", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          profileData: responseData.data[0]
        })
      }).catch((err) => {
        alert("Network request failed")
      })
  }
  render() {
    const { profileData,avatarSource , spinner} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={[styles.container, { backgroundColor: '#e6e6e6' }]}>
          <ImageBackground
            source={require('@Images/dashboard-bg.png')}
            style={{ height: height, width: width }}>
            <View style={styles.container}>
              {/* <View style={{height: 60, backgroundColor: 'pink'}} />*/}
              <View
                style={{
                  height: width / 5.35,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={styles.editButton}>
                  <Image
                    source={require('@Images/pencil-outline.png')}
                    style={styles.icon}
                  />
                  <Text style={{ color: '#31ab13' }}>Edit Personal Details</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.card1View}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                  {profileData && (
                  <TouchableOpacity onPress={this.onSelectingImage}>
                    {spinner?
                    (<View style={[styles.profileImage,{borderWidth:1, borderColor:'grey', backgroundColor:'white'}]}>
                    <ActivityIndicator/>
                    </View>
                      ):avatarSource != null ?(
                    <Image style={styles.profileImage} source={avatarSource} />
                    ):(
                    <Image style={styles.profileImage} source={{ uri: profileData.profile_image }} />
                    )}                    
                    </TouchableOpacity>
                  )}

                </View>
                <View style={{ flex: 0.7, alignItems: 'flex-start' }}>
                  {profileData && (<Text style={{ color: '#31ab13', fontSize: 20 }}>
                    {profileData.full_name}
                  </Text>)}

                  <Text>Last Login: 22-07-2019 07:23am </Text>
                </View>
              </View>
              <View
                style={styles.card2View}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 10,
                  }}>
                  <View style={{ flex: 0.1, alignItems: 'center' }}>
                    <Image
                      source={require('@Images/email.png')}
                      style={styles.icon}
                    />
                  </View>
                  <View style={{ flex: 0.9, alignItems: 'flex-start' }}>
                    {profileData && <Text>{profileData.email}</Text>}
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  <View style={{ flex: 0.1, alignItems: 'center' }}>
                    <Image
                      source={require('@Images/location-new.png')}
                      style={styles.icon}
                    />
                  </View>
                  <View style={{ flex: 0.9, alignItems: 'flex-start' }}>
                    {profileData && <Text>{profileData.location}</Text>}
                  </View>
                </View>
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <TouchableOpacity
                  style={styles.filterButton}>
                  <Image
                    source={require('@Images/settings.png')}
                    style={styles.icon}
                  />
                  <Text style={{ color: 'white', fontSize: 16 }}>
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
                  style={styles.changeButton}>
                  <Text style={{ color: 'white' }}>Change</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.logoutButton}>
                <Text style={{ color: '#31ab13' }}>logout</Text>
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
  editButton: {
    height: width / 9.37,
    width: width / 1.78,
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#31ab13',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  card1View: {
    height: 100,
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
  },
  profileImage:{
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  card2View:{
    marginTop: 10,
    height: 150,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  filterButton:{
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
  },
  changeButton:{
    height: 40,
    width: 100,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#31ab13',
    backgroundColor: '#31ab13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton:{
    height: 40,
    width: 100,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#31ab13',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
