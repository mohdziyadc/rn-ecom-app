import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

type ProductProps = {
  product: any;
};
const Product = ({ product }: ProductProps) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  const cardWidth = screenWidth / 2 - 20;

  return (
    <View
      className="p-4 flex m-2 bg-white rounded-xl justify-center items-center"
      style={{ width: cardWidth }}
    >
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
