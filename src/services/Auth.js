// auth.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const isAuth = async () => {
  try {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  } catch (error) {
    console.error('Error checking authentication status:', error);
    return false;
  }
};

export const login = async (userData) => {
  try {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    await AsyncStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('user');
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
