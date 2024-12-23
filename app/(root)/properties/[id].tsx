import { SafeAreaView, Text } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="h">
      <Text>Property {id}</Text>
      <Link href="/" className="text-lg font-afacadFlux text-red-600 font-bold">
        Back
      </Link>
    </SafeAreaView>
  );
};

export default Property;
