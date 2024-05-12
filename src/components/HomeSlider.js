import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const features = [
  { icon: '💼', text: 'Créer des catégories pour organiser vos dépenses' },
  { icon: '💳', text: 'Ajouter des dépenses avec des détails tels que le montant, la date et la catégorie' },
  { icon: '📊', text: 'Visualiser vos dépenses dans un graphique pour suivre vos habitudes de dépenses' },
  { icon: '💰', text: 'Fixer des budgets pour chaque catégorie et suivre votre dépense par rapport à votre budget' },
  { icon: '💵', text: 'Enregistrer des dépôts et suivre votre solde actuel' },
];

const PageClient = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur l'application de Gestion de Dépenses</Text>
      <Text style={styles.subtitle}>Gérer vos dépenses n'a jamais été aussi simple !</Text>
      <ScrollView contentContainerStyle={styles.featuresContainer}>
        {features.map((feature, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={styles.featureItem}
          >
            <Text style={styles.icon}>{feature.icon}</Text>
            <Text style={styles.featureText}>{feature.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.infoText}>Commencez dès maintenant et prenez le contrôle de vos finances !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop:50,
    color: '#2f3e46',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#2f3e46',
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
    marginTop:40
  },
  featureItem: {
    backgroundColor: '#F6E9B2',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    flex: 1,
  },
  infoText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
    marginBottom: 80,
    color: '#2f3e46',
  },
});

export default PageClient;
