import {Button} from '@components';
import {tokens} from '@constants';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useProfile} from './useProfile';

export const Profile = () => {
  const {logout} = useProfile();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          onPress={logout}
          text="Logout"
          textStyle={styles.logoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: tokens.horizontalSpace,
  },
  logoutButton: {
    color: 'red',
    fontWeight: '600',
  },
});
