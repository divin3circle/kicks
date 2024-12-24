import { TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Ionicons } from "@expo/vector-icons";

interface FeaturedCardProps {
  onPress?: () => void;
}

const FeaturedCard = ({ onPress }: FeaturedCardProps) => {
  return (
    <TouchableOpacity
      className="flex flex-col relative shadow-sm rounded-lg"
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
      <Image
        source={images.cardGradient}
        className="rounded-2xl h-80 w-60 size-full absolute bottom-0"
        style={{
          width: 240,
          height: 300,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />
      <View
        className="absolute top-8 right-0 bg-white/90 rounded-lg px-3 py-1.5 flex flex-row items-center"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 20,
          paddingHorizontal: 8,
          position: "absolute",
          top: 20,
          right: 20,
          paddingVertical: 2,
        }}
      >
        <Ionicons name="heart" size={16} color="red" />
        <Text
          className="text-white font-bold font-afacadFlux-bold text-xs ml-1"
          style={{
            color: "#000",
            fontSize: 12,
          }}
        >
          4.9
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text
          className="font-afacadFlux"
          style={{
            color: "#fff",
            fontSize: 20,
          }}
          numberOfLines={1}
        >
          Jordan IV
        </Text>
        <View
          className="flex flex-row items-center justify-between"
          style={{
            width: "90%",
          }}
        >
          <Text
            className="text-white font-afacadFlux-extrabold text-xl"
            style={{ color: "#fff" }}
          >
            KES 3,500
          </Text>
          <Ionicons name="star" size={16} color="yellow" />
        </View>
        <View className="flex flex-row items-center mt-2">
          <Image
            source={images.jordan}
            style={{
              width: 20,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <Text
            className="text-white text-sm font-afacadFlux-bold ml-1.5"
            style={{
              color: "#fff",
              fontSize: 12,
            }}
          >
            JORDAN
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
