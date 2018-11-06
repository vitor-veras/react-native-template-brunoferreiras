import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './containers/Home';
import Login from './containers/Login';
import CustomHeader from './presentations/CustomHeader';

const AppRouter = createStackNavigator(
  {
    Login: { screen: Login },
    MainNavigation: createStackNavigator(
      {
        Home: { screen: Home }
      },
      {
        initialRouteName: 'Home',
        navigationOptions: {
          header: <CustomHeader />
        }
      }
    )
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default AppRouter;
