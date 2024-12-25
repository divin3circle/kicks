import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Image
        source={images.noResult}
        style={{
          width: 150,
          height: 150,
          alignSelf: "center",
          marginTop: 100,
        }}
      />
      <Text className="text-center text-lg font-afacadFlux mt-8 text-gray-400">
        No Results
      </Text>
      <Text className="text-center text-lg font-afacadFlux text-gray-400">
        We couldn't find any results for your search.
      </Text>
    </View>
  );
};

export default NoResults;
