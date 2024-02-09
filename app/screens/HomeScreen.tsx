import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Slide3 } from "../assets";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filterPressed, setFilterPressed] = useState(false);
  const handleFilterPress = (event: GestureResponderEvent) => {
    setFilterPressed(!filterPressed);
  };

  return (
    <SafeAreaView className="flex-1 justify-start items-center bg-[#ebeaef]">
      <View className="flex flex-row p-4 w-full items-center justify-between">
        <View>
          <MaterialIcons name="chevron-left" size={38} color={"#555"} />
        </View>
        <Image
          source={Slide3}
          className="h-10 w-10 rounded-[99999px]"
          resizeMode="cover"
        />
      </View>

      <View className="flex flex-row justify-between items-center w-full px-4 py-2 space-x-3">
        <View className="bg-white flex-1 focus:shadow-2xl shadow-sm flex-row rounded-xl items-center justify-center px-4 py-2 space-x-2">
          <MaterialIcons name="search" size={24} color={"#7f7f7f"} />
          <TextInput
            placeholder="Search"
            value={searchText}
            onChangeText={(val) => setSearchText(val)}
            className="flex-1 text-base font-semibold py-1 text-[#555]"
            placeholderTextColor={"#808080"}
          />
        </View>
        <TouchableOpacity
          className="bg-white h-12 w-12 rounded-xl flex items-center justify-center"
          onPress={handleFilterPress}
        >
          {filterPressed ? (
            <MaterialCommunityIcons name="filter" size={28} color="black" />
          ) : (
            <MaterialCommunityIcons
              name="filter-outline"
              size={28}
              color="black"
            />
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
