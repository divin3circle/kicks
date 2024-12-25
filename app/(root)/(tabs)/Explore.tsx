import Card from "@/components/Card";
import FeaturedCard from "@/components/FeaturedCard";
import Filters from "@/components/Filters";
import NoResults from "@/components/NoResults";
import SearchBar from "@/components/SearchBar";
import { getLatestShoes, getShoes } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { useAppwrite } from "@/lib/hooks/useAppwrite";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default function Explore() {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

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
      limit: 20,
    });
  }, [params.query, params.filter]);

  const handleCardPress = (id: string) => router.push(`/shoes/${id}`);

  return (
    <SafeAreaView className="bg-white flex-1">
      {/* <Button onPress={seed} title="Seed" /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card shoe={item} onPress={() => handleCardPress(item.$id)} />
        )}
        ListHeaderComponent={
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5 mb-2">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row items-center bg-primary-300 px-3 py-1.5 rounded-lg"
              >
                <Ionicons name="chevron-back" size={16} color="#fff" />
              </TouchableOpacity>
              <Text className="text-xl font-afacadFlux-bold">
                The Perfect Pair Awaits
              </Text>
              <Ionicons name="notifications" size={24} color="#000" />
            </View>
            <SearchBar />
            <View className="mt-5">
              <Filters />
              <Text className="text-xl font-bold tetx-primary-300">
                Found {data?.length} shoes
              </Text>
            </View>
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
