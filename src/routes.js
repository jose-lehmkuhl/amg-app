import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import News from './pages/News';
import Standings from './pages/Standings';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home,
    News,
    Standings,
  }),
);

export default Routes;
