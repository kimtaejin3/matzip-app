/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    //노치 영역을 침범하지 않음
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>텍스트</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}/>
        <Text>텍스트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'yellow',
    flex:1,
  },

  input:{
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 100,
    flex:1,
  },

  inputContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'red'
  }
});

export default App;
