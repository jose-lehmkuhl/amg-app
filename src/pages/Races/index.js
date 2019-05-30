import React, { Component, Fragment } from 'react';
import {
  View, Text, ActivityIndicator, Dimensions,
} from 'react-native';
import moment from 'moment';
import MapView, { Marker } from 'react-native-maps';

import { getNextRace } from '../../services/f1';
import styles from './styles';

export default class Race extends Component {
  state = {
    loading: true,
    race: {},
  };

  componentDidMount() {
    this.getNextRaceInfo();
  }

  getNextRaceInfo = async () => {
    const race = await getNextRace();
    this.setState({
      loading: false,
      race: race.data.MRData.RaceTable.Races[0],
    });
  };

  render() {
    const { width } = Dimensions.get('window');
    const { loading, race } = this.state;
    return (
      <Fragment>
        {loading ? (
          <View style={styles.containerCenter}>
            <ActivityIndicator size={80} color="#0ca597" />
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.title}> Next Race </Text>
            <Text style={styles.text}>{race.raceName}</Text>
            <Text style={styles.text}>
              {moment(`${race.date} ${race.time}`).format('hh:mm a, DD MMMM YYYY')}
            </Text>
            <Text style={styles.title}> Circuit </Text>
            <Text style={styles.text}>{race.Circuit.circuitName}</Text>
            <Text style={styles.text}>
              {`${race.Circuit.Location.locality}, ${race.Circuit.Location.country}`}
            </Text>
            <View style={{ alignItems: 'center', width }}>
              <MapView
                initialRegion={{
                  latitude: parseFloat(race.Circuit.Location.lat),
                  longitude: parseFloat(race.Circuit.Location.long),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={{
                  height: 400,
                  width: width - 20,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(race.Circuit.Location.lat),
                    longitude: parseFloat(race.Circuit.Location.long),
                  }}
                  title={race.Circuit.circuitName}
                />
              </MapView>
            </View>
          </View>
        )}
      </Fragment>
    );
  }
}
