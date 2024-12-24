import { TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import images from "@/constants/images";

interface FeaturedCardProps {
  onPress?: () => void;
}

const FeaturedCard = ({ onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity
      className="flex flex-col isolate relative shadow-sm rounded-lg"
      style={{ width: 240, height: 300 }}
    >
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
    </TouchableOpacity>
  );
};

export default FeaturedCard;
