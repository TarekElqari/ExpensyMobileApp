import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = async (username, password) => {
    try {
      const response = await fetch('http://192.168.0.102:8080/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }
  
      const responseData = await response.json();
      setUser(responseData.user);
      await AsyncStorage.setItem('user', JSON.stringify(responseData.user));
    } catch (error) {
      console.error('Sign-in error:', error);
      throw error;
    }
  };
  
  

  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
