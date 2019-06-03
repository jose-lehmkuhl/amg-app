import React from 'react';

import {
  View, Text, Dimensions, Image, ScrollView,
} from 'react-native';

import drivers from './drivers';

const win = Dimensions.get('window');
const ratio = win.width / 1024;

function renderDriver(driver) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 20,
      }}
    >
      <Image
        style={{
          height: 1024 * ratio,
          width: win.width,
        }}
        source={driver.image}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 32,
          }}
        >
          {driver.name}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 32,
          }}
        >
          {driver.number}
        </Text>
        <Image
          style={{
            width: 60,
            height: 40,
          }}
          source={driver.flagImage}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {driver.info.map(renderInfo)}
      </View>
    </View>
  );
}

function renderInfo(item) {
  return (
    <View
      key={item.title}
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
        }}
      >
        {item.title}
      </Text>
      <Text>{item.content}</Text>
    </View>
  );
}

export default () => (
  <ScrollView>
    {renderDriver(drivers.hamilton)}
    {renderDriver(drivers.bottas)}
  </ScrollView>
);
