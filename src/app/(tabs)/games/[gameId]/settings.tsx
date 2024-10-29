import { SafeAreaView, Text, View } from "react-native";
import { Game } from "@/providers/jazz/schema";
import { useLocalSearchParams } from "expo-router";
import BackToGames from "@/components/BackToGames";
import { useCoState } from "@/providers/jazz";
import { ID } from "jazz-tools";

function GameSettings() {
  const { gameId } = useLocalSearchParams();
  if (!gameId) return null;

  const gameIdParsed = gameId.toString() as ID<Game>;
  const game = useCoState(Game, gameIdParsed);
  if (!game) return null;

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-900">
      <View className="flex m-3">
        <BackToGames />
        <Text className="text-black dark:text-white">
          {game.start.toLocaleDateString()} - {game.start.toLocaleTimeString()}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default GameSettings;
