import React from 'react';

import { View, Image } from 'react-native';
import logo from '../../img/logo.png';
import styles from './styles';
import VideoPlayer from './VideoPlayer';

export default () => (
  <View style={styles.container}>
    <Image source={logo} />
    <VideoPlayer videoId="SV0khCjvAmI" />
  </View>
);
