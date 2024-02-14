import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

type CartItemProps = {
  product: any;
  quantity: number;
};

const CartItem = ({ product, quantity }: CartItemProps) => {
  return (
    <View className="flex flex-row space-x-4 bg-white mb-4 rounded-lg shadow-md px-4 py-2">
      {/* <Text>{product.title}</Text>
      <Text>{quantity}</Text> */}
      <View className=" relative flex items-center justify-center bg-slate-200 rounded-md p-2">
        <Image
          source={{ uri: product.mainImage?.asset.url }}
          className="h-16 w-16 z-10"
          resizeMode="contain"
        />
        <Image
          source={{ uri: product.bgImage?.asset.url }}
          className="absolute h-16 w-16 opacity-50"
          resizeMode="cover"
        />
      </View>
      <View className="flex-grow">
        <Text className="font-bold text-[#555] text-xl">{product.title}</Text>
        <Text className="font-normal text-[#555]">
          {product.shortDescription}
        </Text>
        <View className="flex-row mt-2 justify-between items-center">
          <Text className="font-bold text-lg">${product.price}</Text>
          <View className="flex-row justify-center items-center">
            <Text className="text-xs text-[#555]">QTY: </Text>
            <Text className="font-bold text-base">{quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
