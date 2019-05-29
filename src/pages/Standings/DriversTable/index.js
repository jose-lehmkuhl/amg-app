import React, { Component } from 'react';

import { View, Dimensions } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import styles from './styles';

export default class DriversTable extends Component {
  state = {
    drivers: [],
  };

  componentDidMount() {
    const { drivers } = this.props;
    this.setState({ drivers: drivers.map(this.formatDriverForTable) });
  }

  formatDriverForTable = driver => ({
    position: driver.position,
    points: driver.points,
    name: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
    team: driver.Constructors[0].constructorId,
  });

  setRowBackgroundColor = (team) => {
    if (team === 'mercedes') {
      return { ...styles.tableContainer, backgroundColor: '#0ca597' };
    }

    return styles.tableContainer;
  };

  render() {
    const { width } = Dimensions.get('window');
    const { drivers } = this.state;
    return (
      <View>
        <Table borderStyle={styles.rowBorder}>
          <Row
            data={['#', 'Name', 'pts']}
            widthArr={[40, width - 90, 50]}
            borderStyle={styles.rowBorder}
            style={styles.tableContainer}
            textStyle={styles.rowText}
          />
          {drivers.map(driver => (
            <Row
              key={driver.position}
              data={[driver.position, driver.name, driver.points]}
              widthArr={[40, width - 90, 50]}
              style={this.setRowBackgroundColor(driver.team)}
              textStyle={styles.rowText}
            />
          ))}
        </Table>
      </View>
    );
  }
}
