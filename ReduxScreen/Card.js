import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToMyCard,
  deleteMyCardItem,
  removeMyCardItem,
} from "../Redux/MyCardSlice";

const Card = () => {
  const myCardItems = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const getTotal = () => {
    let total = 0;
    myCardItems.map((item) => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <Text style={{ fontSize: 25, color: "black" }}>Card</Text>

      <FlatList
        data={myCardItems}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                backgroundColor: "#CE93D8",
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "column", margin: 20 }}>
                <Text> Name: {item.name}</Text>
                <Text> Price: {item.price}</Text>

                <View style={{ flexDirection: "row", marginTop: 50 }}>
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#880E4F",
                        borderRadius: 10,
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        {
                          item.qty > 1
                            ? dispatch(removeMyCardItem(item))
                            : dispatch(deleteMyCardItem(item));
                        }
                      }}
                    >
                      <Text style={{ color: "#ffff", alignSelf: "center" }}>
                        -
                      </Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : <Text>{item.qty}</Text>}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "#880E4F",
                        borderRadius: 10,
                        justifyContent: "center",
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCard(item));
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
              <TouchableOpacity onPress={()=>{dispatch(deleteMyCardItem(item))}} >
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/128/1214/1214428.png",
                  }}
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {myCardItems.length > 0 ? (
        <View
          style={{
            backgroundColor: "#fff",
            bottom: 2,
            height: 80,
            margin: 10,
            padding: 10,
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 15, color: "black" }}>
              {"Added Items" + "(" + myCardItems.length + ")"}{" "}
            </Text>
            <Text>{"Total :" + getTotal()}</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 140,
              height: 50,
              backgroundColor: "#880E4F",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 80,
            }}
          >
            <Text>Proceed To Payment</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Card;
