import { TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import images from "@/constants/images";

interface FeaturedCardProps {
  onPress?: () => void;
}

const FeaturedCard = ({ onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col isolate relative shadow-md rounded-lg"
    >
      <Image source={images.japan} className="rounded-2xl size-full" />
      <Text className="text-lg font-bold font-afacadFlux-bold">Jordan IV</Text>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
