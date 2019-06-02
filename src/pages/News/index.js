import React, { PureComponent } from 'react';

import {
  View, Text, FlatList, Image, TouchableHighlight,
  Dimensions, ScrollView, BackHandler,
} from 'react-native';

import news from './content';

export default class Race extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };

    this.onPressButton = this.onPressButton.bind(this);
  }

  componentDidMount() {
    const { selected } = this.state;

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (selected) {
        this.setState({
          selected: undefined,
        });
        return true;
      }
      return false;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onPressButton(id) {
    this.setState({
      selected: id,
    });
  }

  renderItem(item) {
    const win = Dimensions.get('window');
    const ratio = win.width / 533;

    return (
      <TouchableHighlight onPress={() => this.onPressButton(item.id)} underlayColor="white">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignCcontent: 'space-between',
          }}
        >
          <Image
            style={{
              height: 140 * ratio,
              width: 140,
              margin: 5,
            }}
            source={item.image}
          />
          <View>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                marginRight: 140 + 15,   // desconta tamanho da imagem
                fontWeight: 'bold',
              }}
            >
              {item.title}
            </Text>
            <Text
              numberOfLines={4}
              ellipsizeMode="tail"
              style={{
                marginRight: 140 + 15,   // desconta tamanho da imagem
              }}
            >
              {item.content}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderContent() {
    const { selected } = this.state;

    const selectedItem = news.find(item => item.id === selected);
    const win = Dimensions.get('window');
    const ratio = win.width / 533; // 533 = height of image

    return (
      <ScrollView>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            margin: 15,
          }}
        >
          {selectedItem.title}
        </Text>
        <Image
          style={{
            height: 300 * ratio,
            width: win.width,
          }}
          source={selectedItem.image}
        />
        <Text
          style={{
            margin: 15,
          }}
        >
          {selectedItem.content}
        </Text>
      </ScrollView>
    );
  }

  render() {
    const { selected } = this.state;

    if (!selected) {
      return (
        <View>
          <FlatList
            data={news}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </View>
      );
    }
    return this.renderContent();
  }
}
