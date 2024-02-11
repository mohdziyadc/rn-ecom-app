import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationConfig,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackParamList } from "../App";

type ProductProps = {
  product: any;
};
const Product = ({ product }: ProductProps) => {
  const screenWidth = Math.round(Dimensions.get("window").width);
  /**
   * Each box would occupy half the screen. We need to account for
   * the space between them while calculating their width
   * hence here -20 is used
   */
  const cardWidth = screenWidth / 2 - 20;

  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList, "Product">>();

  function handleProductPress(): void {
    navigate("Product", { id: product._id });
  }

  return (
    <TouchableOpacity
      className="p-4 flex m-2 shadow-lg bg-white rounded-xl justify-center items-center"
      style={{ width: cardWidth }}
      onPress={handleProductPress}
    >
      <Image
        source={{
          uri: product?.mainImage?.asset?.url,
        }}
        resizeMode="contain"
        className="h-40 w-40"
      />
      <View className="flex w-full justify-start space-y-2">
        <Text className="mt-4 text-base font-semibold text-[#555]">
          {product?.title}
        </Text>
        <Text className=" text-gray-500">{product?.description}</Text>
        <Text className="text-base font-medium text-[#777]">
          $ {product?.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Product;

const styles = StyleSheet.create({});
