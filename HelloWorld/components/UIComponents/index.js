import React from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  DrawerLayoutAndroid,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  InputAccessoryView,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Item({text}) {
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
    </View>
  );
}

const items = [
  {
    id: 1,
    item: 'Milk',
  },
  {
    id: 2,
    item: 'Milk',
  },
  {
    id: 3,
    item: 'Milk',
  },
];

export default function UIComponents() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}> UI Components</Text>

          {/* Activity Indicator */}
          <Text style={styles.subHeader}>1. Activity Indicator</Text>
          <ActivityIndicator size="large" />

          {/* Button */}
          <Text style={styles.subHeader}>2. Button</Text>
          <Button title="Here is a Button"></Button>

          {/* DrawerLayoutAndroid */}
          <Text style={styles.subHeader}>3. DrawerLayoutAndroid</Text>
          <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={() => Item}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
                DrawerLayoutAndroid
              </Text>
            </View>
          </DrawerLayoutAndroid>

          {/* FlatList */}
          <Text style={styles.subHeader}>4. FlatList</Text>
          <FlatList
            data={items}
            renderItem={({item}) => <Item text={item.item}></Item>}
          />

          {/* Image */}
          <Text style={styles.subHeader}>5. Image</Text>
          <Image
            style={{width: 50, height: 50}}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}></Image>

          {/* Image Background */}
          <Text style={styles.subHeader}>6. Image Background</Text>
          <ImageBackground
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            style={{width: '100%'}}>
            <Text>Inside</Text>
          </ImageBackground>

          {/* Text Input */}
          <Text style={styles.subHeader}>7. TextInput</Text>
          <TextInput
            style={styles.border}
            inputAccessoryViewID={'e343'}
            value={'Anuj'}
          />

          {/* Text Input */}
          <Text style={styles.subHeader}>7. TextInput</Text>
          <TextInput
            style={styles.border}
            inputAccessoryViewID={'e343'}
            value={'Anuj'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 30,
    margin: 10,
  },
  subHeader: {
    fontSize: 25,
    marginLeft: 20,
  },
  item: {
    padding: 10,
  },
  border: {
    borderColor: '#000',
    borderWidth: 2,
  },
});
