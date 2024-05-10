import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign-Up')}>
          <Text style={styles.toggleText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    height: '60%',
    alignItems: 'center',
    backgroundColor: '#fefae0',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#283618',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fefae0',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#283618',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#dda15e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fefae0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleText: {
    marginTop: 10,
    color: '#bc6c25',
    textDecorationLine: 'underline',
  },
});

export default SignIn;
