import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.signIn}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-8">
          <Text className="text-base font-afacadFlux text-black text-center">
            WELCOME TO KICKS
          </Text>
          <Text className="text-3xl font-afacadFlux-extrabold text-black text-center mt-2">
            Let's Get You the {"\n"}
            <Text className="text-3xl font-afacadFlux-extrabold text-primary-300 text-center mt-2">
              Perfect Pair
            </Text>
          </Text>
          <TouchableOpacity
            className="mt-8 flex items-center gap-4 flex-row justify-center border border-gray-200 rounded-full py-3 shadow-md bg-white shadow-zinc-200"
            onPress={handleLogin}
          >
            <Image
              source={icons.google}
              className="h-6 w-6"
              resizeMode="contain"
            />
            <Text className="text-lg font-afacadFlux-bold text-black text-center">
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
