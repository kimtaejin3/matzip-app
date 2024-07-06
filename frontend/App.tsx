/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStackNavigator from './src/navigations/stack/AuthStackNavigator';
import RootNavigator from './src/navigations/root/RootNavigator';

function App(): JSX.Element {
  return (
    //노치 영역을 침범하지 않음
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
