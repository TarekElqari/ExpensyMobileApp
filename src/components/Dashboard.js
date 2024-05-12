import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#7469B6', paddingVertical: 18 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Budget')}>
          <Text style={{ color: 'white' }}>Budget</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Depense')}>
          <Text style={{ color: 'white' }}>Depense</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categorie')}>
          <Text style={{ color: 'white' }}>Categorie</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Depot')}>
          <Text style={{ color: 'white' }}>Depot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
