// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// // import HomeScreen from './Screens/Homescreen';
// import HomeScreen from './Screens/Homescreen';
// // import { Component } from 'react';
// import screenWrapper from './components/screenWrapper'


// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Homescreen corner</Text> */}
//       <HomeScreen/>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './Screens/HomeScreen'
const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})