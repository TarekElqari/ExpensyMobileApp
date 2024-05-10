import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeSlider from './HomeSlider';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeSlider}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign-In"
          component={SignIn}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Sign-Up"
          component={SignUp}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
