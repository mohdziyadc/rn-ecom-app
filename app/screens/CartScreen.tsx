import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const screenHeight = Math.floor(Dimensions.get("window").height);
  return (
    <SafeAreaView className="relative flex-1 items-start justify-start bg-[#ebeaef] space-y-4">
      {/* Header Section */}
      <View className="flex mt-4 w-full items-center justify-center">
        <Text className="font-bold text-xl text-[#555] ">Shopping Bag</Text>
        <View className="absolute top-0 right-2 flex justify-center items-center bg-white w-9 h-9 rounded-xl">
          <FontAwesome5 name="shopping-bag" size={16} color="black" />
          <View className="absolute bg-black rounded-xl w-[20px] h-[20px] -top-2 -right-1 flex items-center justify-center">
            <Text className="text-white text-xs">{cart.items?.length}</Text>
          </View>
        </View>
      </View>

      {/* Cart Items Section */}
      {!cart.items || cart.items?.length === 0 ? (
        <View className="flex-1 justify-center w-full  items-center">
          <Text className="text-xl font-bold">No Products in the Cart</Text>
          <Text className="text-xl font-bold"> Add products!!</Text>
        </View>
      ) : (
        <>
          <View style={{ height: screenHeight / 2 }} className="w-full">
            <FlatList
              data={cart.items}
              renderItem={({ item }) => (
                <CartItem product={item.product} quantity={item.qty} />
              )}
              keyExtractor={(item) => item.product._id}
              contentContainerStyle={{ padding: 16 }}
            />
          </View>

          <View className="w-full mt-2 p-4">
            <KeyboardAvoidingView className="bg-white px-4 rounded-3xl flex-row justify-center py-2 w-full">
              <TextInput
                className="flex-1 rounded-2xl py-1 px-4"
                placeholder="Enter Promo code"
              />
              <TouchableOpacity className="bg-black px-4 py-2 rounded-3xl">
                <Text className="text-white font-bold">Apply</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
