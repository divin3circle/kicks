import Card from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import SearchBar from "@/components/SearchBar";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  className="size-12 rounded-full"
                  source={{
                    uri: user?.avatar,
                  }}
                />
                <View className="ml-2 flex flex-col items-start justify-center">
                  <Text className="text-base text-gray-400 font-bold font-afacadFlux">
                    Good Morning
                  </Text>
                  <Text className="text-lg font-afacadFlux-bold">
                    {user?.name}.
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
            <FlatList
              data={[1, 2, 3]}
              renderItem={({ item }) => <FeaturedCard />}
              horizontal
              keyExtractor={(item) => item.toString()}
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5"
            />
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
          </View>
        }
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
