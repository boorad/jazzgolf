import { SafeAreaView, Text, View } from "react-native";
import { Game } from "@/providers/jazz/schema";
import BackToGames from "@/components/BackToGames";

function GameScoring() {

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900">
      <View className="flex m-3">
        <BackToGames />
        <Text className="text-black dark:text-white">
          game
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default GameScoring;
