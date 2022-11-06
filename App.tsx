import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {AuthStack, MainTabs} from '@navigation';

const queryClient = new QueryClient();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);

      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, [initializing]);

  // useEffect(() => {
  //   const userId = auth().currentUser?.uid;
  //   if (userId) {
  //     console.warn(userId);
  //     const onValueChange = database()
  //       .ref(`/users/${userId}`)
  //       .on('value', snapshot => {
  //         console.log('User data: ', snapshot.val());
  //       });

  //     database().ref(`/users/${userId}/favorites`).push('123');

  //     // Stop listening for updates when no longer required
  //     return () =>
  //       database().ref(`/users/${userId}`).off('value', onValueChange);
  //   }
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {user ? <MainTabs /> : <AuthStack />}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
