import { View,Animated } from 'react-native'
import React,{useEffect,useRef} from 'react'

function App() {
  const animation=useRef(new Animated.Value(0)).current;
  const startAnimation=()=>{
    Animated.sequence([
        Animated.timing(animation,{
            toValue:1,
            duration: 2000,
            useNativeDriver:true,
        }),
      ]).start();
  }

  const fadeAnim = useRef(new Animated.Value(0)).current; 
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
      <Animated.Image
          source={require('./src/Images/Bird1.gif')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 150,
              top:80
            },
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 370],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Red.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -190,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 340],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 180],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Orange.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: 310,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 340],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -230],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/leaf.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 180,
              width: 150,
              top:50
            },
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <Animated.Image
          source={require('./src/Images/Pink.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -60,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 140],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Green.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: 310,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 140],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <Animated.Image
          source={require('./src/Images/Yellow.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -60,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.1],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/insta.png')}
          style={[
            {
              height: 10,
              width: 10,
              alignSelf: 'center',
              marginHorizontal: 150,
              opacity: fadeAnim,
            },
            {
              transform:[
                {
                  scale: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 20],
                  }), 
                }
              ]
             
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Marun.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -10,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -195],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
        <Animated.Image
          source={require('./src/Images/Black.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -60,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Blue.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: 310,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 40}}>
      <Animated.Image
          source={require('./src/Images/leaf1.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 180,
              width: 150,
              bottom:10,
              right:200
            },
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 200],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Red.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: -200,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -280],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 190],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('./src/Images/Orange.png')}
          onLoadEnd={startAnimation}
          style={[
            {
              height: 100,
              width: 100,
              marginLeft: 300,
            },
            {
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -280],
                  }),
                },
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -205],
                  }),
                },
                {
                  scale: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
}


export default App;
