import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View
      className="flex items-center my-5"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
        style={{ width: "90%", height: 200 }}
      />
      <Text className="text-2xl font-afacadFlux-bold text-black text-center mt-4">
        No results found
      </Text>
      <Text className="text-base font-afacadFlux text-center text-gray-400">
        We couldn't find any results😑
      </Text>
    </View>
  );
};

export default NoResults;
