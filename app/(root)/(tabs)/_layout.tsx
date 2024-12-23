import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          borderTopWidth: 0.2,
          borderTopColor: "#0061ff",
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color="black"
              style={{
                color: focused ? "#0061ff" : "black",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={{
                color: focused ? "#0061ff" : "black",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color="black"
              style={{
                color: focused ? "#0061ff" : "black",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
