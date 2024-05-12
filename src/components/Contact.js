import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Implement your form submission logic here
    // For example, you can send a POST request to your backend with the form data
    // Don't forget to handle validation and error cases
    if (name && email && message) {
      // Form fields are not empty
      // Here you can send the form data to your backend or display a success message
      Alert.alert('Success', 'Your message has been sent successfully!');
      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');
    } else {
      // Form fields are empty
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.box}>
    <Text style={styles.title}>Contacter Nous</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Envoyer Message</Text>
      </TouchableOpacity></View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff'
    },
    box: {
      width: '100%',
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.80,
      shadowRadius: 5,
      elevation: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#fafafa',
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: '#FFC55A',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  

export default Contact;
