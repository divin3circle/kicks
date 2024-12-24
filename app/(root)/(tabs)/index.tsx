import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View, SafeAreaView, Image } from "react-native";
import SearchBar from "@/components/SearchBar";

export default function Index() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image className="size-12 rounded-full" source={images.avatar} />
            <View className="ml-2 flex flex-col items-start justify-center">
              <Text className="text-base font-bold font-afacadFlux-bold">
                Good Morning
              </Text>
              <Text className="text-lg text-gray-400 font-afacadFlux">
                Omutelema
              </Text>
            </View>
          </View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
