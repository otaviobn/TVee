import {Route} from '@constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {AuthStackParamList} from '@navigation';
import {useState} from 'react';
import {Alert} from 'react-native';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const login = async () => {
    try {
      if (email || password) {
        setIsLoading(true);

        await auth().signInWithEmailAndPassword(email, password);
      } else {
        Alert.alert('Ops..', 'Please, fill email and password');
      }
    } catch (error: any) {
      if (error.code === 'auth/wrong-password' || 'auth/user-not-found') {
        Alert.alert('Ops..', 'Wrong email or passsword');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = () => {
    navigation.navigate(Route.SignUp);
  };

  return {email, password, setEmail, setPassword, login, signUp, isLoading};
};
