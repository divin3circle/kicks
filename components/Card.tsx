import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const Card = () => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      className="flex flex-col isolate relative w-6 h-8 shadow-md rounded-lg"
    >
      <Image source={images.japan} className="rounded-2xl size-full" />
      <Text className="text-lg font-bold font-afacadFlux-bold">Jordan IV</Text>
    </TouchableOpacity>
  );
};

export default Card;
