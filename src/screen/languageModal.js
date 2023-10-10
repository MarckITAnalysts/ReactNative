import React, { useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Grayscale} from 'react-native-color-matrix-image-filters'
import Modal from "react-native-modal";

const LanguageModal=()=>{
  const [modal,setModal]=useState(false);
  const [radio,setRadio]=useState(1);
  const [name,setname]=useState('');
    
    
    const [language,setLanguage]=useState([
      {
        id:1,
        name:'English',
      },
      {
        id:2,
        name:'Hindi',
      },
      {
        id:3,
        name:'Gujarati',
      },
      {
        id:4,
        name:'Marathi',
      },
      {
        id:5,
        name:'Telugu',
      },
      {
        id:6,
        name:'Urdu',
      },
    ])
    return (
      <View style={{flex: 1, justifyContent: 'center', margin: 10}}>
        <View style={{margin: 5}}>
          <Button
            title="Select your Language"
            onPress={() => setModal(!modal)}></Button>
          <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: '600'}}>Language : {name}
          </Text>
        </View>
        <Modal
          isVisible={modal}
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          animationOutTiming={1000}
          onBackButtonPress={() => setModal(false)}
          onBackdropPress={() => setModal(false)}
          onSwipeComplete={() => setModal(false)}
          useNativeDriver={true}
          swipeDirection="left">
          <View style={styles.viewOuter}>
            <View style={styles.viewInner}>
              <FlatList
                data={language}
                renderItem={({item, index}) => {
                  console.log("item:::", item);
                  
                  return (
                    <TouchableOpacity
                      style={[
                        styles.touchable,
                        {
                          backgroundColor: radio === item.id ? '#fff7f7' : '#fff',
                          borderColor: radio === item.id ? '#d43b50' : '#000',
                        },
                      ]}
                      key={index}
                      onPress={() => {
                        setRadio(item.id);
                        setModal(!modal);
                        setname(item.name);
                      }}>
                      <View style={{width: 275, marginRight: 10}}>
                        <View style={styles.wrap}>
                          <View
                            style={[
                              styles.radio,
                              {
                                borderColor:
                                  radio === item.id ? '#d43b50' : '#000',
                              },
                            ]}>
                            {radio === item.id ? (
                              <View style={styles.radioBg}></View>
                            ) : null}
                          </View>
                          <Text
                            style={{
                              fontSize: 20,
                              color: radio === item.id ? '#d43b50' : '#000',
                              fontWeight: radio === item.id ? '700' : '500',
                            }}>
                            {item.name}
                          </Text>
                        </View>
                        <View></View>
                      </View>
                      {radio === item.id ? (
                        <Image
                          source={require('../Images/language.png')}
                          style={styles.img}></Image>
                      ) : (
                        <Grayscale>
                          <Image
                            source={require('../Images/language.png')}
                            style={styles.img}></Image>
                        </Grayscale>
                      )}
                    </TouchableOpacity>
                  );
                }}></FlatList>
            </View>
          </View>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  viewInner: {
    backgroundColor: 'white',
    height: 300,
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent:'space-between',
  },
  viewOuter: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: -20,
  },
  touchable:{
    height:60,
    width:'100%',
    borderRadius:5,
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    padding:5,
    marginTop:10,
  },
  radio:{
    height:30,
    width:30,
    borderWidth:2,
    borderRadius:15,
    margin:10
  },
  wrap:{
    flexDirection:'row',alignItems:'center'
  },
  radioBg:{
    height:20,
    width:20,
    borderRadius:10,
    margin:3,
    backgroundColor:'#d43b50',
  },
  img:{
    height:50,
    width:50,
    opacity:.6
  }
});
 
  


export default LanguageModal;
