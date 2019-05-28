import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getConstructorStandings, getDriverStandings } from '../../services/f1';

// import styles from './styles';

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
      <View>
        {loading ? (
          <Text>Carregando</Text>
        ) : (
          <View>
            {drivers.map(el => (
              <Text key={el.Driver.driverId}>{`${el.Driver.driverId} - ${el.points} pts`}</Text>
            ))}
            {constructors.map(el => (
              <Text key={el.Constructor.constructorId}>
                {`${el.Constructor.constructorId} - ${el.points} pts`}
              </Text>
            ))}
          </View>
        )}
      </View>
    );
  }
}
