import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

export default function BackToGames() {
  if (!router.canGoBack()) return null;
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Text className="text-black dark:text-white">&lt;</Text>
    </TouchableOpacity>
  );
}
