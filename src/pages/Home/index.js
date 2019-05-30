import React, { Component } from 'react';

import { View, Image } from 'react-native';
import logo from '../../img/logo.png';
import styles from './styles';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

export default class Home extends Component {
  state = { videoId: 'SV0khCjvAmI', mountVideo: false };

  componentDidUpdate({ navigation }) {
    const { mountVideo } = this.state;
    if (mountVideo) {
      if (navigation.state.routeName === 'Home' && !navigation.isFocused()) {
        this.setState({ mountVideo: false, videoId: '' });
      }
    }
  }

  videoSelectionOnPress = (id) => {
    const { videoId } = this.state;
    if (id !== videoId) {
      this.setState({ videoId: id, mountVideo: true });
    }
  };

  render() {
    const { videoId, mountVideo } = this.state;
    return (
      <View style={styles.container}>
        <Image source={logo} />
        {mountVideo && <VideoPlayer videoId={videoId} />}
        <VideoList videoId={videoId} onPress={this.videoSelectionOnPress} />
      </View>
    );
  }
}
