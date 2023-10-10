import React, { useState,useRef} from 'react';
import {
  Button,
  View,
  Animated,
} from 'react-native';

const ViewAnimation=()=>{
    const [btnClicked,setBtnClicked]=useState(false)
    const animation=useRef(new Animated.Value(0)).current;

    const startAnimation=()=>{
      Animated.timing(animation,{
        toValue: btnClicked ? 0 : 1,
        duration: 500,
        useNativeDriver:true,
      }).start();
    }
    
    return (
      <View style={{flex: 1, justifyContent: 'center', margin: 10}}>
        <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: '#d43b50',
              alignSelf: 'center',
              marginBottom: 20,
              borderRadius:btnClicked ? 50 : null
            },
            {
              transform:[
                {
                  translateY:animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-150],
                  }),
                },
                {
                  rotate:animation.interpolate({
                  inputRange:[0,1],
                  outputRange:['0deg','360deg'],
                  }),
                },
                {
                  translateX:animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,140],
                  }),
                },
                {
                  scale:animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[1,.5],
                  }),
                },
              ]
            }
          ]} 
        />
        <View style={{margin: 5}}>
          <Button title="Start Animation" onPress={()=>{setBtnClicked(!btnClicked),startAnimation()}}></Button>
        </View>
      </View>
    )
}

export default ViewAnimation