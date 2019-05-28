import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './pages/Home';
import News from './pages/News';

const Routes = createAppContainer(
  createBottomTabNavigator({
    Home,
    News,
  }),
);

export default Routes;
