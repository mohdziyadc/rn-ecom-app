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
        <FlatList
          data={feeds}
          renderItem={(feed) => <Product product={feed} />}
          numColumns={2}
        />
      ) : (
        <View className="text-center mt-64">
          <Text className="font-semibold text-base">
            An error occured. Please refresh
          </Text>
        </View>
      )}
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({});
