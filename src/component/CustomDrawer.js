import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { InterfaceOrientation } from 'react-native-reanimated';

const CustomDrawer = (props) => {
  return (
    <View style={{flex:1,marginTop:-5}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#fff'}}>
        <ImageBackground source={require('../images/background.jpeg')} style={{padding:20}}>
          <Image source={require('../images/user1.jpeg')} style={{height:80,width:80,borderRadius:40,marginBottom:10}}></Image>
          <Text style={{color:'#fff',fontSize:18,marginBottom:5}}>John Doe</Text>
        </ImageBackground>
        <View style={{flex:1,backgroundColor:'#fff',paddingTop:10}}></View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{padding:20,borderTopWidth:1,borderTopColor:'#ccc'}}>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}> 
            <Icon name={'share-social-outline'} size={22} color={'black'} />
            <Text style={{fontSize:15,marginLeft:5,fontWeight:'700',color:'#333' }}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}>
          <View style={{flexDirection:'row',alignItems:'center'}}> 
            <Icon name={'exit-outline'} size={22} color={'black'}/>
            <Text style={{fontSize:15,marginLeft:5,fontWeight:'700',color:'#333' }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})