import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '@navigation';
import {useState} from 'react';
import {Alert} from 'react-native';

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const signUp = async () => {
    try {
      if (email || password) {
        setIsLoading(true);

        await auth().createUserWithEmailAndPassword(email, password);
      } else {
        Alert.alert('Ops..', 'Please, fill email and password');
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Ops..', 'That email address is already in use');
      }

      if (error.code === 'auth/invalid-password') {
        Alert.alert('Ops..', 'Passowrd must be at least 6 digits longer');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('Ops..', 'That email address is invalid');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    signUp,
    isLoading,
    goBack: navigation.goBack,
  };
};
