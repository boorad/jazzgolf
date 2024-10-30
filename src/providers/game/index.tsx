import { SafeAreaView, Text, View } from "react-native";
import { Game } from "@/providers/jazz/schema";
import { useLocalSearchParams } from "expo-router";
import BackToGames from "@/components/BackToGames";
import { useCoState } from "@/providers/jazz";
import { ID } from "jazz-tools";

interface GameProviderProps {
  children: React.ReactNode;
}

// TODO: add more to the header than just the back button
function GameProvider({ children }: GameProviderProps) {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900">
      <View className="flex m-3">
        <BackToGames />
      </View>
      {children}
    </SafeAreaView>
  );
}

export default GameProvider;
