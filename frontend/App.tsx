/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
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
  const [name, setName] = useState('');
  const handleChangeInput = (text: string) => {
    console.log(text)
    setName(text)
  }

  return (
    //노치 영역을 침범하지 않음
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>텍스트</Text>
        <TextInput style={styles.input} value={name} onChangeText={handleChangeInput}/>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  input:{
    borderWidth: 2,
    width: 100,
    height: 50,
    flex:1,
  },

  inputContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  }
});

export default App;
