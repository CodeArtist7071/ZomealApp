import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';


const App = () => {
  return (
<GluestackUIProvider config={config}>
<AppNavigator />
</GluestackUIProvider>

  )
    
};

export default App;