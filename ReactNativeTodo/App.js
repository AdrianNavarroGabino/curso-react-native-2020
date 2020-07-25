import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// En el emulador de Android
// ctrl + M -> Opciones (reload, debug...)
// R + R -> Reload

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola mundo!</Text>
    </View>
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
