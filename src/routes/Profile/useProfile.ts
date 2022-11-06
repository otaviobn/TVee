import auth from '@react-native-firebase/auth';

export const useProfile = () => {
  const logout = () => {
    auth().signOut();
  };

  return {logout};
};
