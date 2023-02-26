import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './constant/colors';

export default function App() {
  return (
    <LinearGradient colors={[colors.lightPurple, 'transparent']}
    style={styles.container}>
        <SafeAreaView style={styles.view}>
        </SafeAreaView>     
        <StatusBar style="auto" />
    </LinearGradient> 
  );
}

const styles = StyleSheet.create({
  container: {
  display: 'flex',
  flex:1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  },

  view: {
    width: '80%',
  }
});

