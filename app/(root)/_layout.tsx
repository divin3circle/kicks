import { useGlobalContext } from "@/lib/GlobalProvider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (loading) {
    return (
      <SafeAreaView className="h-full justify-center items-center bg-white flex">
        <ActivityIndicator className="text-primary" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLoggedIn) {
    return <Redirect href="/SignIn" />;
  }
  return <Slot />;
}
