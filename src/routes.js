import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import News from './pages/News';
import Standings from './pages/Standings';
import Races from './pages/Races';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      News,
      Races,
      Standings,
    },
    {
      resetOnBlur: true,
      tabBarOptions: {
        activeTintColor: '#fff',
        inactiveTintColor: '#ccc',
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
