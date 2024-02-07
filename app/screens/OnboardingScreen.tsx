import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Slide1, Slide2 } from "../assets";
import { SafeAreaView } from "react-native-safe-area-context";
const OnboardingScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Swiper>
        <SlideOne />
        <SlideTwo />
        <SlideThree />
      </Swiper>
    </View>
  );
};

const SlideOne = () => {
  return (
    <View className="flex-1 justify-center items-center relative">
      <Image source={Slide1} resizeMode="cover" className="w-full h-full" />
      <View className="absolute left-4 top-56 w-48">
        <Text className="text-xl font-semibold text-[#555]">
          Be enchanted by your{" "}
          <Text className="font-bold underline underline-offset-8">
            Beauty.
          </Text>
        </Text>
      </View>
    </View>
  );
};

const SlideTwo = () => {
  return (
    <View className="flex-1 justify-start space-y-4">
      <Image source={Slide2} className="w-full h-[70%]" resizeMode="cover" />
      <View className="flex gap-5 px-2 justify-center items-center">
        <Text className="text-2xl font-semibold text-[#555]">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you decide to be yourself.
        </Text>
      </View>
    </View>
  );
};
const SlideThree = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Slide Three</Text>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
