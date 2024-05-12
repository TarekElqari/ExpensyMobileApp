import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Keyboard, Platform, KeyboardAvoidingView, View } from 'react-native';
import HomeSlider from '../components/HomeSlider';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeSlider} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      {isKeyboardVisible ? null : <Navbar />}
    </KeyboardAvoidingView>
  );
};

export default MainStackNavigator;
