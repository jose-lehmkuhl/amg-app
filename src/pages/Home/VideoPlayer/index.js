import React from 'react';

import { View } from 'react-native';
import YouTube from 'react-native-youtube';

export default ({ videoId }) => (
  <View
    style={{
      alignSelf: 'stretch',
      height: 280,
      paddingTop: 10,
      marginBottom: 40,
    }}
  >
    <YouTube
      apiKey=""
      videoId={videoId} // The YouTube video ID
      style={{ alignSelf: 'stretch', height: 300 }}
    />
  </View>
);
