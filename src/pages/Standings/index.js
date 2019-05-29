import React, { Component, Fragment } from 'react';
import {
  View, Text, ScrollView, ActivityIndicator,
} from 'react-native';
import { getConstructorStandings, getDriverStandings } from '../../services/f1';
import DriversTable from './DriversTable';
import TeamsTable from './TeamsTable';
// import Routes from './routes';
import styles from './styles';

export default class Standings extends Component {
  state = {
    loading: true,
    drivers: [],
    constructors: [],
  };

  componentDidMount() {
    this.getStandingsFromApi();
  }

  getStandingsFromApi = async () => {
    const drivers = await getDriverStandings();
    const constructors = await getConstructorStandings();
    this.setState({
      loading: false,
      drivers: drivers.data.MRData.StandingsTable.StandingsLists[0].DriverStandings,
      constructors: constructors.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings,
    });
  };

  render() {
    const { loading, drivers, constructors } = this.state;
    return (
      <Fragment>
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={80} color="#0ca597" />
          </View>
        ) : (
          <ScrollView style={styles.container}>
            <View>
              <Text style={styles.headers}> Drivers standings </Text>
              <DriversTable drivers={drivers} />

              <Text style={styles.headers}> Constructors standings </Text>
              <TeamsTable teams={constructors} />
            </View>
          </ScrollView>
        )}
      </Fragment>
    );
  }
}
