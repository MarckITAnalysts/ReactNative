import React ,{useEffect,useRef,useState}from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const Searching=()=>{
  const [data,setData]=useState([]);
  const [oldData,setOldData]=useState([]);
  const [search,setSearch]=useState('');
  const [visible,setVisible]=useState(false);
  const searchRef=useRef();

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(response=>{
        console.log(response);
        setData(response);
        setOldData(response)        
      })
  },[]);

  const onSearch=(txt=>{
    if(txt==''){
      setData(oldData)
    }else{
      let list=data.filter(item=>{
        return item.title.toLowerCase().indexOf(txt.toLowerCase()) > -1
      });
      setData(list)
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container2}>
            <Text style={styles.text}>
              <Icon name='search' size={35} color={'black'}/>
            </Text>
            <TextInput 
              placeholder='Search item here...'
              value={search} 
              onChangeText={txt=>{
                onSearch(txt)
                setSearch(txt)
              }}
              style={styles.txtinput}
            />
            {
              search == '' ? null : (
                <TouchableOpacity 
                  onPress={()=>{
                    onSearch('');
                    setSearch('')
                  }}>
                  <Text><Icon name='close-outline' size={35} color={'black'} ></Icon></Text>
                </TouchableOpacity>
              )
            }
        </View>
        <TouchableOpacity
          onPress={()=>setVisible(true)}
        >
          <Text style={{marginLeft:10}}><Icon name='options-outline' size={35} color={'black'}></Icon></Text>
        </TouchableOpacity>
      </View>
      <Modal
      visible={visible}
      animationType='slide'
      transparent={true}>
        <View style={styles.modalOuterView}>
            <View style={styles.modalInnerView}>
              <TouchableOpacity style={styles.touch}
                onPress={()=>{
                  let list = data.sort((a,b) => a.title > b.title ? 1 : -1)
                  setVisible(false)
              }}>
                <Text style={styles.txt}>Sort By Name</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch}
              onPress={()=>{
                let list =data.sort((a,b) => a.price > b.price ? 1 : -1)
                setVisible(false)
              }}>
                <Text style={styles.txt}>Low to High Price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch}
              onPress={()=>{
                let list =data.sort((a,b) => a.price < b.price ? 1 : -1)
                setVisible(false)
              }}>
                <Text style={styles.txt}>High to Low Price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touch}
              onPress={()=>{
                let list =data.sort((a,b)=>a.rating.rate<b.rating.rate ? 1 : -1)
                setVisible(false)
              }}>
                <Text style={styles.txt}>Sort By Ratting</Text>
              </TouchableOpacity>
              
            </View>
        </View>
      </Modal>
      <FlatList
      data={data}
      renderItem={({item,index})=>{
        return(
          <View style={[styles.flatView,{marginBottom:index==data.length-1 ? 20 : 0}]}>
            <Image source={{uri : item.image}} style={styles.img}></Image>
            <View style={{width:250}}>
              <Text style={styles.title}>{item.title.substring(0,30)}</Text>
              <Text style={styles.disc}>{item.description.substring(0,75)}</Text>
              <View style={styles.priceRatView}>
                <Text style={styles.price}>{'$'+item.price}</Text>
                <Text style={styles.rate}>{item.rating.rate}</Text>
                <Text style={styles.star}><Icon name='star' size={18}></Icon></Text>
              </View>
            </View>
          </View>
        )
      }}
      >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center'
  },
  container1:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:70,
    marginTop:20,
  },
  container2:{
    borderWidth:.5,
    height:50,
    width:'80%',
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10
  },
  text:{
    opacity:0.6,
    marginLeft:10
  },
  txtinput:{
    height:50,
    width:'75%',
    fontSize:17
  },
  modalOuterView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,.5)'
  },
  modalInnerView:{
    height:200,
    width:'80%',
    backgroundColor:'white',
    borderRadius:20,
    shadowColor:'black',
    elevation:5
  },
  touch:{
    width:'100%',
    height:50,
    borderBottomWidth:0.5,
    justifyContent:'center',
    alignItems:'center'
  },
  txt:{
    fontSize:20,
    fontWeight:'600',
    color:'black'
  },
  flatView:{
    width:'90%',
    borderWidth:0.5,
    borderRadius:10,
    marginTop:20,
    alignSelf:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  img:{
    width:70,
    height:90,
    borderRadius:10,
    margin:10
  },
  title:{
    marginBottom:8,
    color:'black',
    fontSize:17,
    fontWeight:'600'
  },
  disc:{
    marginBottom:10
  },
  price:{
    fontSize:20,
    fontWeight:'700',
    color:'green',
    marginRight:40
  },
  priceRatView:{
    flexDirection:'row',
    alignItems:'center'
  },
  rate:{
    fontSize:18,
    color:'orange',
    marginLeft:30,
    fontWeight:'700'
  },
  star:{
    color:'orange',
  }
});

export default Searching;
