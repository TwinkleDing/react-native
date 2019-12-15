import React, {Component} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {View, Text, Image} from 'react-native';
export default class ImgPick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
    };
    this.openCamera = this.openCamera.bind(this);
    this.openPicker = this.openPicker.bind(this);
  }
  render() {
    return (
      <View>
        <Text onPress={this.openCamera}>打开相机</Text>
        <Text onPress={this.openPicker}>打开相册</Text>
        <Image
          style={{width: 150, height: 150}}
          source={this.state.avatarSource}
        />
      </View>
    );
  }
  openPicker() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      let source = {uri: image.path};
      this.setState({
        avatarSource: source,
      });
    });
  }
  openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      let source = {uri: image.path};
      this.setState({
        avatarSource: source,
      });
    });
  }
}
/*
Select from gallery
Call single image picker with cropping

ImagePicker.openPicker({
  width: 300,
  height: 400,
  cropping: true
}).then(image => {
  console.log(image);
});
Call multiple image picker

ImagePicker.openPicker({
  multiple: true
}).then(images => {
  console.log(images);
});
Select video only from gallery

ImagePicker.openPicker({
  mediaType: "video",
}).then((video) => {
  console.log(video);
});
Select from camera
Image
ImagePicker.openCamera({
  width: 300,
  height: 400,
  cropping: true,
}).then(image => {
  console.log(image);
});
Video
ImagePicker.openCamera({
  mediaType: 'video',
}).then(image => {
  console.log(image);
});
Crop picture
ImagePicker.openCropper({
  path: 'my-file-path.jpg',
  width: 300,
  height: 400
}).then(image => {
  console.log(image);
});
Optional cleanup
Module is creating tmp images which are going to be cleaned up automatically somewhere in the future. If you want to force cleanup, you can use clean to clean all tmp files, or cleanSingle(path) to clean single tmp file.

ImagePicker.clean().then(() => {
  console.log('removed all tmp images from tmp directory');
}).catch(e => {
  alert(e);
});
https://github.com/ivpusic/react-native-image-crop-picker

*/
