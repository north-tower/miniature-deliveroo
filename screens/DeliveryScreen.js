import { View, Text, SafeAreaView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';


const DeliveryScreen = () => {
    

  return (
<SafeAreaView style={{ flex: 1 }}>
    <WebView source={{ uri: 'familia-blog.web.app/' }} style={{ flex: 1 }} />
</SafeAreaView>

  )
}

export default DeliveryScreen