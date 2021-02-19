import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ListScreen from './src/screens/ListScreen';

const navigator = createStackNavigator(
  {
    List: ListScreen
  },
  {
    initialRouteName: 'List',
    defaultNavigationOptions: {
      title: 'Demo',
    },
  }
);

export default createAppContainer(navigator);














































