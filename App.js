// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import Homescreen from './components/Homescreen';
//import RootComponent from './components/RootComponent/RootComponent';
//import D_pickpup from './components/D_pickpup';
//import  {GestureHandlerRootView} from "react-native-gesture-handler";
import D_home from './components/D_home';

const App = () => {
  return (
    <View style={styles.container}>
      <D_home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
});

export default App;
