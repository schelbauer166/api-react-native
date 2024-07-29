import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GarageScreen } from './src/screens/GarageScreen';


export default function App() {
  return (
    <View style={styles.Container}>
      <GarageScreen />
    </View>
  );
}



const styles = StyleSheet.create({
  Container: {
    flex: 1
  }
});

