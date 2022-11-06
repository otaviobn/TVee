import {Button} from '@components';
import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useLogin} from './useLogin';

export const Login = () => {
  const {email, password, setEmail, setPassword, login, signUp, isLoading} =
    useLogin();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={StyleSheet.absoluteFill}
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod/images/teen-shows-1582317535.jpg',
        }}
        blurRadius={10}
      />
      <View style={styles.backgroundOverlay} />
      <Text style={styles.titleText}>TVee</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholder="email@example.com"
        />
        <TextInput
          style={[styles.textInput, styles.passwordTextInput]}
          placeholder="*****"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <>
            <Button
              outlined
              text="Login"
              onPress={login}
              textStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
            <Button
              outlined
              text="Signup"
              onPress={signUp}
              textStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  textInput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  passwordTextInput: {
    marginBottom: 20,
  },
  formContainer: {
    width: '70%',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 60,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 50,
  },
});
