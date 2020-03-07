/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UIComponents from './components/UIComponents';

const Stack = createStackNavigator();
const Screen1 = function({navigation}) {
  return (
    <View>
      <Text style={styles.text}>Hello World !!</Text>
      <View style={{width: '50%', marginTop: 20}}>
        <Button
          style={styles.button}
          title="Open"
          onPress={() =>
            navigation.navigate('Screen2', {title: 'AScreen2'})
          }></Button>
      </View>
    </View>
  );
};

const Screen2 = function({route, navigate}) {
  console.log(route);
  return (
    <View>
      <UIComponents />
    </View>
  );
};

const App = function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{title: 'Screen1'}}></Stack.Screen>
        <Stack.Screen name="Screen2" component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 30,
  },
  button: {
    width: '100',
  },
});

export default App;
