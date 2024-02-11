import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootState } from "../context/store";
import Product from "./Product";

type FeedsProps = {
  feeds: any[];
};

const Feeds = ({ feeds }: FeedsProps) => {
  return (
    <View className="flex">
      {feeds.length > 0 ? (
        <View className="h-[95%] pb-4">
          <FlatList
            data={feeds}
            renderItem={(item) => <Product product={item.item} />}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
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
