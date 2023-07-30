import { View, Text, SafeAreaView } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';


const WebScreen = () => {
  return (
  
    <WebView source={{ uri: 'https://github.com/north-tower/automatic-doodle' }} style={{ flex: 1 }} />
    
  )
}

export default WebScreen