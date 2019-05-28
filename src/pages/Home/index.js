import React from 'react';

import { View, Image } from 'react-native';
import logo from '../../img/logo.png';
import styles from './styles';

export default () => (
  <View style={styles.container}>
    <Image source={logo} />
  </View>
);
