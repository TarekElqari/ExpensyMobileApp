// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/services/AuthContext';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  return (
    <AuthProvider> 
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;