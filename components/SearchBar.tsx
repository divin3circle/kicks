import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View className="bg-white flex flex-row items-center justify-between mt-4">
      <View className="flex flex-row items-center px-3">
        <Ionicons name="search" size={25} color="gray" />
        <TextInput
          className="w-full ml-2 font-afacadFlux-bold"
          placeholder="Search something"
        />
      </View>
      <View className="">
        <Ionicons name="options" size={24} color="#0061ff" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
