import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCard } from "../Redux/MyCardSlice";

const ProductList = ({navigation}) => {
  const myProducts = useSelector((state) => state.product);
  const myCardItems = useSelector((state) => state.card)
  console.log("card::" + myCardItems);
  
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Text style={{ fontSize: 25, color: "black" }}>ProductList</Text>

      <FlatList
        data={myProducts}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                backgroundColor: "#eeee",
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "column", margin: 20 }}>
                <Text> Name: {item.name}</Text>
                <Text> Price: {item.price}</Text>

                <View style={{ flexDirection: "row", marginTop: 50 }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        width: 120,
                        height: 40,
                        backgroundColor: "#880E4F",
                        borderRadius: 10,
                        justifyContent: "center",
                      }}
                      onPress={()=>{
                        dispatch(addProductToMyCard(item))
                        navigation.navigate('Card')
                      }}
                    >
                      <Text style={{ color: "#ffff", alignSelf: "center" }}>
                        Add to Cart
                      </Text>
                    </TouchableOpacity>
                  ) : null}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#880E4F",
                        borderRadius: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "#ffff", alignSelf: "center" }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : <Text>0</Text>}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#880E4F",
                        borderRadius: 10,
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ color: "#ffff", alignSelf: "center" }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 150,
                  height: 150,
                  margin: 10,
                  borderRadius: 10,
                  marginLeft: 60,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ProductList;
