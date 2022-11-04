import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainTabs} from '@navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default App;
