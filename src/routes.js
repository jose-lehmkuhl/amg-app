import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import News from './pages/News';
import Standings from './pages/Standings';
import Races from './pages/Races';
import Drivers from './pages/Drivers';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      News,
      Drivers,
      Races,
      Standings,
    },
    {
      resetOnBlur: true,
      tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#ccc',
        activeBackgroundColor: '#1c9587',
        inactiveBackgroundColor: '#0ca597',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          backgroundColor: '#0ca597',
          height: 48,
        },
      },
    },
  ),
);

export default Routes;
