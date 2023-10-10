import { View, Text } from "react-native";
import React, { useEffect } from "react";
import Navigator from "./Navigator";
import { useDispatch } from "react-redux";
import { addMyProducts } from "../Redux/MyProductSlice";

const Data = [
  { 
    id:1,
    name: "shoes 1",
    price: "990",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    qty: 0,
  },
  {
    id:2,
    name: "shoes 1",
    price: "990",
    image:
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1600",
    qty: 0,
  },
  {
    id:3,
    name: "shoes 1",
    price: "990",
    image:
      "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
    qty: 0,
  },
  {
    id:4,
    name: "shoes 1",
    price: "990",
    image:
      "https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&w=1600",
    qty: 0,
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Data.map((item) => {
        dispatch(addMyProducts(item))
    });
  }, []);

  return <Navigator />;
};

export default Main;
