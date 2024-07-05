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
    <SafeAreaView>
      <View style={styles.container}>
        <Text>텍스트</Text>
        <Button title="버튼이름" onPress={()=>console.log('clicked!')}/>
        <TextInput/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    backgroundColor: 'red'
  }
});

export default App;
