import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import GlobalProvider from "@/lib/GlobalProvider";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "AfacadFlux-Bold": require("../assets/fonts/AfacadFlux-Bold.ttf"),
    "AfacadFlux-Light": require("../assets/fonts/AfacadFlux-Light.ttf"),
    "AfacadFlux-Regular": require("../assets/fonts/AfacadFlux-Regular.ttf"),
    "AfacadFlux-SemiBold": require("../assets/fonts/AfacadFlux-SemiBold.ttf"),
    "AfacadFlux-Thin": require("../assets/fonts/AfacadFlux-Thin.ttf"),
    "AfacadFlux-ExtraBold": require("../assets/fonts/AfacadFlux-ExtraBold.ttf"),
    "AfacadFlux-Medium": require("../assets/fonts/AfacadFlux-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </GlobalProvider>
  );
}
