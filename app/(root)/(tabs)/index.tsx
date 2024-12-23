import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold font-afacadFlux-bold text-5xl">
        Welcome to Kicks
      </Text>
    </View>
  );
}
