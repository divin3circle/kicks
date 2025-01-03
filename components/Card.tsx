import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Models } from "react-native-appwrite";

interface CardProps {
  shoe: Models.Document;
  onPress?: () => void;
}

const Card = ({ shoe, onPress }: CardProps) => {
  return (
    <TouchableOpacity
      className="flex flex-col rounded-lg"
      style={{
        width: 160,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
      }}
      onPress={onPress}
    >
      <Image
        source={{
          uri: shoe.image,
        }}
        className="rounded-2xl h-80 w-60 size-full"
        style={{
          width: 160,
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
          {shoe.rating.toFixed(1)}
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
            className="font-afacadFlux-bold mt-2"
            style={{
              color: "#000",
              fontSize: 18,
            }}
            numberOfLines={1}
          >
            {shoe.name}
          </Text>
          {/* <Ionicons name="star" size={16} color="#0061ff" /> */}
        </View>
        <View className="flex flex-row items-center my-2">
          <Image
            source={
              shoe.brand === "Nike"
                ? images.nike
                : shoe.brand === "Jordan"
                ? images.jordan
                : images.reebok
            }
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
            {shoe.brand}
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
          className="text-white font-afacadFlux-extrabold text-lg"
          style={{ color: "#0061ff" }}
        >
          KES {shoe.price.toLocaleString()}
        </Text>
        <Ionicons name="bookmark" size={16} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
