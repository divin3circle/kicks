import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Ionicons from "@expo/vector-icons/build/Ionicons";

const Card = () => {
  return (
    <TouchableOpacity
      className="flex flex-col rounded-lg"
      style={{
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
      }}
    >
      <Image
        source={images.jordan_iv}
        className="rounded-2xl h-80 w-60 size-full"
        style={{
          width: 150,
          height: 150,
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
          top: 5,
          right: 5,
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            className="font-afacadFlux-bold mt-1"
            style={{
              color: "#000",
              fontSize: 20,
            }}
            numberOfLines={1}
          >
            Jordan IV
          </Text>
          <Ionicons name="star" size={16} color="#0061ff" />
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
            className="text-white text-sm font-afacadFlux-bold ml-2"
            style={{
              color: "#000",
              fontSize: 12,
            }}
          >
            JORDAN
          </Text>
        </View>
      </View>
      <View
        className="flex flex-row items-center justify-between mt-2"
        style={{
          width: "100%",
        }}
      >
        <Text
          className="text-white font-afacadFlux-extrabold text-xl"
          style={{ color: "#0061ff" }}
        >
          KES 3,500
        </Text>
        <Ionicons name="bookmark" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
