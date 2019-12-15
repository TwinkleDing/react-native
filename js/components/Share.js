import React, {Component} from 'react';
import {Share, Button} from 'react-native';

export default class ShareExample extends Component {
  async onShare() {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
        title: 'title',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <Button title="Share" onPress={this.onShare}>
        Share
      </Button>
    );
  }
}
/*
sharedAction()
static sharedAction()
表示内容已成功分享。


*/
