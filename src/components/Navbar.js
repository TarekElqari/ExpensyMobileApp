// Navbar.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#7469B6', paddingVertical: 18 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <MaterialCommunityIcons name="account-arrow-right" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <MaterialCommunityIcons name="account-plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <MaterialCommunityIcons name="information-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <MaterialCommunityIcons name="email-outline" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <MaterialCommunityIcons name="grid" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
