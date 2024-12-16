import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'; // Import your Navigator component

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
