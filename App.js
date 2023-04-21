import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}  options={{
                headerShown: false,
              }}/>
        </Stack.Navigator>
      </SafeAreaProvider>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
