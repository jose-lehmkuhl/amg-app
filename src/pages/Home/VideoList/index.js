import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import {
  ScrollView, View, Image, Text, Dimensions, TouchableOpacity,
} from 'react-native';
import styles from './styles';

export default class VideoList extends Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    const { videos } = this.state;
    if (videos.length < 1) {
      this.searchYT();
    }
  }

  searchYT = () => {
    YTSearch(
      { key: 'AIzaSyCDCVpV_jCrB4IQV9pGkGJ06IslDmMfoaM', term: 'formula 1 mercedes best moments' },
      this.videosToState,
    );
  };

  videosToState = (videos) => {
    this.setState({ videos });
  };

  render() {
    const { videos } = this.state;
    const { onPress, videoId } = this.props;
    const { width } = Dimensions.get('window');
    return (
      <ScrollView
        style={{
          alignSelf: 'stretch',
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        {videos.map(video => (
          <TouchableOpacity
            key={video.id.videoId}
            style={video.id.videoId === videoId ? styles.selectedContainer : styles.container}
            onPress={() => onPress(video.id.videoId)}
          >
            <View style={{ width: 170, justifyContent: 'flex-start' }}>
              <Image style={styles.image} source={{ uri: video.snippet.thumbnails.default.url }} />
            </View>
            <View style={{ width: width - 170, justifyContent: 'flex-end' }}>
              <Text style={styles.title}>
                {video.snippet.title.slice(0, 30)}
                ...
              </Text>
              <Text style={styles.description}>
                {video.snippet.description.slice(0, 80)}
                ...
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
