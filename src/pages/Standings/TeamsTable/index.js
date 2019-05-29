import React, { Component } from 'react';

import { View, Dimensions } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './styles';

export default class DriversTable extends Component {
  state = {
    teams: [],
  };

  componentDidMount() {
    const { teams } = this.props;
    this.setState({ teams: teams.map(this.formatTeamsForTable) });
  }

  formatTeamsForTable = team => ({
    position: team.position,
    points: team.points,
    name: team.Constructor.name,
    id: team.Constructor.constructorId,
  });

  setRowBackgroundColor = (id) => {
    if (id === 'mercedes') {
      return { ...styles.tableContainer, backgroundColor: '#0ca597' };
    }

    return styles.tableContainer;
  };

  render() {
    const { width } = Dimensions.get('window');
    const { teams } = this.state;
    return (
      <View>
        <Table borderStyle={styles.rowBorder}>
          <Row
            data={['#', 'Team', 'pts']}
            widthArr={[40, width - 90, 50]}
            borderStyle={styles.rowBorder}
            style={styles.tableContainer}
            textStyle={styles.rowText}
          />
          {teams.map(team => (
            <Row
              key={team.position}
              data={[team.position, team.name, team.points]}
              widthArr={[40, width - 90, 50]}
              style={this.setRowBackgroundColor(team.id)}
              textStyle={styles.rowText}
            />
          ))}
        </Table>
      </View>
    );
  }
}
