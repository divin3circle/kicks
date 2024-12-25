import Card from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import SearchBar from "@/components/SearchBar";
import images from "@/constants/images";
import { getLatestShoes, getShoes } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { useAppwrite } from "@/lib/hooks/useAppwrite";
import seed from "@/lib/seed";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const { data: featuredShoes, loading: loadingFeaturedShoes } = useAppwrite({
    fn: getLatestShoes,
  });

  const { data, loading, refetch } = useAppwrite({
    fn: getShoes,
    params: {
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
      limit: 6,
    });
  }, [params.query, params.filter]);

  const handleCardPress = (id: string) => router.push(`/shoes/${id}`);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* <Button onPress={seed} title="Seed" /> */}
      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <Card shoe={item} onPress={() => handleCardPress(item.$id)} />
        )}
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
              data={featuredShoes}
              renderItem={({ item }) => (
                <FeaturedCard
                  shoe={item}
                  onPress={() => handleCardPress(item.$id)}
                />
              )}
              horizontal
              keyExtractor={(item) => item.$createdAt}
              bounces={false}
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5"
              ListEmptyComponent={
                loading ? (
                  <ActivityIndicator
                    size="large"
                    color="#0061ff"
                    className="mt-5"
                  />
                ) : (
                  <View
                    style={{
                      width: "100%",
                    }}
                  >
                    <Text className="text-center text-lg font-afacadFlux mt-8 text-gray-400">
                      No Results
                    </Text>
                  </View>
                )
              }
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
        keyExtractor={(item) => item.$createdAt}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" color="#0061ff" className="mt-5" />
          ) : (
            <NoResults />
          )
        }
      />
    </SafeAreaView>
  );
}
