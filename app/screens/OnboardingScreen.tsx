import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Swiper from "react-native-swiper";
import { Slide1, Slide2, Slide3 } from "../assets";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../App";
import AsyncStorage from "@react-native-async-storage/async-storage";

type onboardingScreenProps = NativeStackNavigationProp<
  StackParamList,
  "Onboarding"
>;
const OnboardingScreen = () => {
  const { navigate, replace } = useNavigation<onboardingScreenProps>();

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const value = await AsyncStorage.getItem("onboarding_complete");
      if (value !== null && value === "true") {
        console.log(value);
        replace("Home");
      }
    };
    checkOnboardingStatus();
  }, []);

  const handleOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem("onboarding_complete", "true");
      navigate("Home");
    } catch (e) {
      console.log("Error setting onboarding status: " + e);
    }
  };
  return (
    <View className="flex-1 justify-center items-center">
      <Swiper>
        <SlideOne />
        <SlideTwo />
        <SlideThree onButtonPress={handleOnboardingComplete} />
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
      <View className="flex gap-5 px-6 justify-center items-center">
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

type SlideThreeProps = {
  onButtonPress: () => void;
};
const SlideThree = ({ onButtonPress }: SlideThreeProps) => {
  return (
    <View className="flex-1 justify-start space-y-4">
      <Image source={Slide3} className="w-full h-[70%]" resizeMode="cover" />
      <View className="flex gap-5 px-6 justify-center items-center">
        <Text className="text-2xl font-semibold text-[#555]">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you decide to be yourself.
        </Text>
      </View>
      <View className="px-12 mb-6 rounded-lg">
        <Button title="Explore" onPress={onButtonPress} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
