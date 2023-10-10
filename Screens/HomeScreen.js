import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={style.container}>
    <Text>Home</Text>
    <TouchableOpacity
      onPress={() => { logout }}
    >
      <Text>Logout</Text>
    </TouchableOpacity>
  </View>
  )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "center"
    },
    logout: {
      backgroundColor: "#283593",
    },
  })
  

export default HomeScreen