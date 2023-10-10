import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  const HomeScreen = () => {
    console.log("HomeScreen");
    return (
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center',height:'100%',width:'100%'}}>
        <Text style={styles.text}>Home Screen</Text>
      </View>
    );
}
const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      alignContent: 'center',
      textAlign: 'center',
    },
})
export default HomeScreen;