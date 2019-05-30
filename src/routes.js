import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import News from './pages/News';
import Standings from './pages/Standings';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      News,
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
