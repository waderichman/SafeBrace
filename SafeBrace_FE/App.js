import React from 'react';
import { AppRegistry } from 'react-native';
import Navigation from './navigation/Navigation';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);

const App = () => {
  return (
    <Navigation></Navigation>
  );
};

AppRegistry.registerComponent('SafeBrace', () => App);

export default App;