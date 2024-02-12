import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";

type BottomNavProps = {
  activeScreen: string;
};
const BottomNav = ({ activeScreen }: BottomNavProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <SafeAreaView className="absolute bottom-0 right-0 left-0  w-full ">
      <View className="bg-[#130d2d] p-4 pb-6 w-full flex-row justify-around items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        >
          <MaterialIcons
            name="dashboard"
            size={36}
            color={activeScreen === "Home" ? "#fff" : "#5c5576"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("User");
          }}
          hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        >
          <FontAwesome
            name="user"
            size={36}
            color={activeScreen === "User" ? "#fff" : "#5c5576"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
          hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        >
          {activeScreen === "Cart" ? (
            <FontAwesome6 name="cart-shopping" size={26} color="#fff" />
          ) : (
            <Ionicons name="cart-outline" size={36} color={"#5c5576"} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
          hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
        >
          <FontAwesome6
            name="list-ul"
            size={32}
            color={activeScreen === "Settings" ? "#fff" : "#5c5576"}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
