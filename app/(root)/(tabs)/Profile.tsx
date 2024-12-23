import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";

const Profile = () => {
  async function handleLogout() {}
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-38 px-7"
      >
        <View className="flex-row justify-between items-center mt-5">
          <Text className="text-3xl font-afacadFlux-extrabold text-black">
            Profile
          </Text>
          <Image source={icons.bell} className="size-5" />
        </View>
        <View className="flex-row justify-center flex mt-5">
          <View className="flex flex-col items-center mt-5 relative">
            <Image source={images.avatar} className="size-44 rounded-full" />
            <TouchableOpacity className="absolute right-2 bottom-10">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>
            <Text className="text-2xl font-afacadFlux-bold text-black mt-3">
              Sylus Abel
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
