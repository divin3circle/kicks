import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

const Card = () => {
  return (
    <View className="flex flex-col isolate relative shadow-sm rounded-lg">
      <Image
        source={images.jordan_iv}
        className="rounded-2xl h-80 w-60 size-full"
        style={{
          width: 240,
          height: 300,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default Card;
