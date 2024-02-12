import {
  ActivityIndicator,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../App";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { RootState } from "../context/store";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

type ProductScreenRouteProp = RouteProp<StackParamList, "Product">;
type ProductScreenProps = {
  route: ProductScreenRouteProp;
};
const ProductScreen = ({ route }: ProductScreenProps) => {
  const screenHeight = Math.round(Dimensions.get("window").height);
  const { id } = route.params;
  const feeds = useSelector((state: RootState) => state.feeds.feeds);
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { data: product, isFetching } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const [data] = feeds.filter((item: any) => item._id === id);

      return data;
    },
  });

  function goBack() {
    navigation.goBack();
  }

  function handleFavoritePress() {
    setIsFavorite(!isFavorite);
  }

  const handleQuantity = (action: number) => {
    const newQty = quantity + action;
    setQuantity(newQty < 1 ? 1 : newQty);
  };

  return isFetching ? (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={"large"} color={"orange"} />
    </View>
  ) : (
    <>
      <SafeAreaView className="flex-1 justify-start items-start ">
        <View className="flex  flex-row w-full px-4 py-2 justify-between items-center">
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="chevron-left" size={40} color={"#555"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="shoppingcart" size={32} color="black" />
          </TouchableOpacity>
        </View>
        {/* Image Section */}
        <View
          className="w-full flex justify-center  items-center relative "
          style={{ height: screenHeight / 2 }}
        >
          <Image
            source={{ uri: product?.bgImage?.asset.url }}
            resizeMode="cover"
            className="h-full w-full opacity-30"
          />
          <View
            className="absolute shadow-lg left-0 top-0 flex justify-center items-center w-full h-full"
            style={{ zIndex: 10 }}
          >
            <Image
              source={{ uri: product?.mainImage.asset.url }}
              resizeMode="contain"
              className="h-80 w-80"
            />
          </View>
        </View>

        {/* Categories Section */}
        <View className="flex justify-evenly mt-2  flex-row items-center w-full">
          {product?.categories &&
            product?.categories.length > 0 &&
            product?.categories.map((category: any) => (
              <View
                key={category._id}
                className="bg-white flex justify-center items-center space-y-2 p-4 shadow-sm rounded-xl"
              >
                <Image
                  source={{ uri: category?.mainImage?.asset.url }}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
                <Text className="text-[#555]">{category.title}</Text>
              </View>
            ))}
        </View>
        <View className="flex-1 bg-white rounded-t-[36px] w-full mt-4 py-6 px-8 space-y-4 shadow-2xl">
          <View className="flex-row justify-between items-center">
            <View className="flex justify-center items-start">
              <Text className="font-bold text-2xl">{product.title}</Text>
              <Text className="text-md text-[#777]">
                {product?.shortDescription}
              </Text>
            </View>

            <TouchableOpacity onPress={handleFavoritePress}>
              {isFavorite ? (
                <MaterialCommunityIcons
                  name="heart-circle"
                  size={32}
                  color="black"
                />
              ) : (
                <MaterialCommunityIcons
                  name="heart-circle-outline"
                  size={32}
                  color="black"
                />
              )}
            </TouchableOpacity>
          </View>
          <View className="flex-row w-full justify-between items-center">
            <View>
              <Text className="text-2xl font-bold">${product.price}</Text>
            </View>
            <View className="flex-row  items-center">
              <View className="flex-row border border-gray-200 mr-2 px-4 py-1 space-x-2 rounded-xl items-center ">
                <TouchableOpacity onPress={() => handleQuantity(-1)}>
                  <Text className="text-lg font-bold text-[#555]">-</Text>
                </TouchableOpacity>
                <Text className="text-xl font-bold text-black">{quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantity(1)}>
                  <Text className="text-lg font-bold text-[#555]">+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="bg-black px-4 py-2 rounded-xl">
                <Text className="text-white font-bold text-base">
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
