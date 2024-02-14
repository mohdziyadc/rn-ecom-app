import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";

const CartScreen = () => {
  return (
    <SafeAreaView className="relative flex-1 items-start justify-start bg-[#ebeaef] space-y-4">
      <View className="flex mt-4 w-full items-center justify-center">
        <Text className="font-bold text-xl text-[#555] ">Shopping Bag</Text>
        <View className="absolute top-0 right-2 flex justify-center items-center bg-white w-9 h-9 rounded-xl">
          <FontAwesome5 name="shopping-bag" size={16} color="black" />
          <View className="absolute bg-black rounded-xl w-[20px] h-[20px] -top-2 -right-1 flex items-center justify-center">
            <Text className="text-white text-xs">2</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
