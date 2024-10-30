import { Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import GameProvider from "@/providers/game";
import { getGameFromParams } from "@/utils/game";

function GameSettings() {
  const game = getGameFromParams(useLocalSearchParams());
  if (!game) return null;

  return (
    <GameProvider>
      <Text className="text-black dark:text-white">
        {game.start.toLocaleDateString()} - {game.start.toLocaleTimeString()}
        settings
      </Text>
    </GameProvider>
  );
}

export default GameSettings;
