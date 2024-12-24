import Card from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="px-5" showsVerticalScrollIndicator={false}>
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image className="size-12 rounded-full" source={images.avatar} />
            <View className="ml-2 flex flex-col items-start justify-center">
              <Text className="text-base font-bold font-afacadFlux-bold">
                Good Morning
              </Text>
              <Text className="text-lg text-gray-400 font-afacadFlux">
                Omutelema. Welcome back!
              </Text>
            </View>
          </View>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <SearchBar />
        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold font-afacadFlux-bold">
              Featured
            </Text>
            <TouchableOpacity className="">
              <Text className="text-base font-bold font-afacadFlux-bold text-primary-300 underline">
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row items-center gap-5">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </View>
        <View className="flex flex-row items-center justify-between mt-5 mb-2">
          <Text className="text-xl font-bold font-afacadFlux-bold">
            Best Prices
          </Text>
          <TouchableOpacity className="">
            <Text className="text-base font-bold font-afacadFlux-bold text-primary-300 underline">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Filters />
        <View className="flex flex-row items-center gap-5 mt-5 w-full justify-between">
          <Card />
          <Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
