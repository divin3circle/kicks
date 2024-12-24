import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { logout } from "@/lib/appwrite";

type IoniconsName = keyof typeof Ionicons.glyphMap;

interface ProfileItemProps {
  id: number;
  title: string;
  iconName: IoniconsName;
  onPress?: () => void;
}

function ProfileItem({ title, iconName, onPress, id }: ProfileItemProps) {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between w-full p-[10px]"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-2">
        <Ionicons
          name={iconName}
          size={24}
          color="#000"
          className="dark:text-white"
        />
        <Text className="text-2xl font-afacadFlux-bold text-black dark:text-white">
          {title}
        </Text>
      </View>
      <Ionicons
        name="chevron-forward"
        size={24}
        color="#000"
        className="pt-2"
      />
    </TouchableOpacity>
  );
}

const Profile = () => {
  const profileItems: ProfileItemProps[] = [
    {
      id: 1,
      title: "My Orders",
      iconName: "receipt",
    },
    {
      id: 2,
      title: "Payments",
      iconName: "card",
    },
    {
      id: 3,
      title: "Profile",
      iconName: "person",
    },
    {
      id: 4,
      title: "Notifications",
      iconName: "notifications",
    },
    {
      id: 5,
      title: "Security",
      iconName: "lock-closed",
    },
    {
      id: 6,
      title: "Language",
      iconName: "language",
    },
    {
      id: 7,
      title: "Help Center",
      iconName: "help-circle",
    },
    {
      id: 8,
      title: "Invite Friends",
      iconName: "person-add",
    },
  ];
  const { user, refetch } = useGlobalContext();
  async function handleLogout() {
    const result = await logout();
    if (result) {
      Alert.alert("Logout", "You have been logged out successfully", [
        {
          text: "Ok",
          onPress: () => {
            refetch();
          },
        },
      ]);
    } else {
      Alert.alert("Logout", "An error occurred while logging out", [
        {
          text: "Ok",
        },
      ]);
    }
  }
  return (
    <SafeAreaView className="h-full bg-white dark:bg-black">
      {user ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="pb-38 px-7"
        >
          <View className="flex-row justify-between items-center mt-5">
            <Text className="text-3xl font-afacadFlux-extrabold text-black dark:text-white">
              Profile
            </Text>
            <Ionicons name="notifications" size={24} color="#000" />
          </View>
          <View className="flex-row justify-center flex mt-5">
            <View className="flex flex-col items-center mt-5 relative">
              <Image
                source={{
                  uri: user?.avatar,
                }}
                className="size-44 rounded-full"
              />
              <TouchableOpacity className="absolute right-2 bottom-10">
                <Image source={icons.edit} className="size-9" />
              </TouchableOpacity>
              <Text className="text-2xl font-afacadFlux-bold text-black mt-3">
                {user?.name}
              </Text>
            </View>
          </View>
          <View className="my-2">
            {profileItems.splice(0, 2).map((item) => (
              <ProfileItem
                key={item.id}
                id={item.id}
                title={item.title}
                iconName={item.iconName}
              />
            ))}
          </View>
          <View className="my-2">
            {profileItems.splice(2).map((item) => (
              <ProfileItem
                key={item.id}
                id={item.id}
                title={item.title}
                iconName={item.iconName}
                onPress={() => {}}
              />
            ))}
            <TouchableOpacity
              className="flex-row items-center justify-between w-full p-4"
              onPress={handleLogout}
            >
              <View className="flex-row items-center gap-2">
                <Ionicons name="log-out" size={24} color="#ff0000" />
                <Text className="text-2xl font-afacadFlux-bold text-danger">
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center mt-5 pb-16">
            <Link
              href="/"
              className="underline font-afacadFlux-light py-3 px-5"
              onPress={() => {}}
            >
              App Version 1.0.0
            </Link>
          </View>
        </ScrollView>
      ) : (
        <View className="flex flex-col items-center justify-center h-full">
          <Text className="text-2xl font-afacadFlux-bold text-black dark:text-white">
            You are not logged in
          </Text>
          <Link
            href="/SignIn"
            className="underline font-afacadFlux-light py-3 px-5 mt-5"
            onPress={() => {}}
          >
            Signin
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
