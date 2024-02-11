import {
  ActivityIndicator,
  Button,
  GestureResponderEvent,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Slide3 } from "../assets";
import { fetchFeeds } from "../sanity";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context/store";
import { setFeeds } from "../context/feeds/feedsSlice";
import Feeds from "../components/Feeds";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [filterPressed, setFilterPressed] = useState(false);
  const [filtered, setFiltered] = useState<any>();
  const handleFilterPress = (event: GestureResponderEvent) => {
    setFilterPressed(!filterPressed);
  };

  const feeds = useSelector((state: RootState) => state.feeds.feeds);
  const dispatch = useDispatch<AppDispatch>();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const data = await fetchFeeds();
      dispatch(setFeeds(data));
      return data;
    },
  });
  function handleSearchText(text: string): void {
    setSearchText(text);
    setFiltered(
      feeds.filter((item: any) => {
        const title: string = item.title.toLowerCase();
        return title.includes(text.toLowerCase());
      })
    );
  }

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
            onChangeText={handleSearchText}
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

      {/* Scrollable View Starts */}
      {isLoading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size={"large"} color={"orange"} />
        </View>
      ) : (
        <View>
          <Feeds feeds={filtered || filtered?.length > 0 ? filtered : feeds} />
        </View>
      )}
      {/* Scrollable View Ends */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
