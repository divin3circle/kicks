import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, usePathname, router } from "expo-router";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = React.useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };
  return (
    <View className="flex items-center flex-row w-full rounded-lg px-5 bg-accent-100 justify-between mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-normal z-50">
        <Ionicons name="search" size={24} color="black" />
        <TextInput
          className="ml-2 text-sm text-black font-afacadFlux-bold"
          placeholder="Search for anything"
          value={search}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity className="">
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
