/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginLayout from './src/screen/login';
import HomeLayout from './src/screen/home';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from 'react-navigation';
// const App = () => {
//   return (
//     <View style={styles.root}>
//       <StatusBar barStyle="dark-content" />
//       <LoginLayout />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//   },
// });
const AppNavigator = createStackNavigator({
  Login: {screen: LoginLayout},
  Home: {screen: HomeLayout},
});

export default AppNavigator;
