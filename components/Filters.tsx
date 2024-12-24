import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = React.useState(
    params.filter || "All"
  );

  const handleCategoryChange = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "All" });
      return;
    } else {
      setSelectedCategory(category);
      router.setParams({ filter: category });
    }
  };
  return (
    <ScrollView
      horizontal
      className="flex flex-row mt-3 mb-1 font-afacadFlux"
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            marginRight: 5,
            paddingHorizontal: 15,
            borderRadius: 14,
            paddingVertical: 5,
            backgroundColor:
              selectedCategory === category.title ? "#0061ff" : "#f0f0f0",
            marginBottom: 20,
          }}
          onPress={() => handleCategoryChange(category.title)}
        >
          <Text
            className="font-afacadFlux text-lg"
            style={{
              color: selectedCategory === category.title ? "#fff" : "#000",
            }}
          >
            {category.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;

const styles = StyleSheet.create({});
