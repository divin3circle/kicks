import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Explore = () => {
  return (
    <View>
      <Text>Explore</Text>
      <Text className="text-lg font-afacadFlux text-red-600 font-bold">
        Home
      </Text>
      <Link href="/" className="text-lg font-afacadFlux text-red-600 font-bold">
        Home
      </Link>
    </View>
  );
};

export default Explore;
