import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootState } from "../context/store";
import Product from "./Product";

type FeedsProps = {
  feeds: any[];
};

const Feeds = ({ feeds }: FeedsProps) => {
  const screenHeight = Math.round(Dimensions.get("window").height);
  return (
    <View className="flex">
      {feeds.length > 0 ? (
        <View>
          <FlatList
            data={feeds}
            renderItem={(item) => <Product product={item.item} />}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ paddingBottom: 0.2 * screenHeight }}
          />
        </View>
      ) : (
        <View className="text-center mt-64">
          <Text className="font-semibold text-base">No data found.</Text>
        </View>
      )}
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({});
