import { Text, TouchableOpacity, View } from "react-native";
import { Game } from "@/schema";

function GameComponent({ game, deleteGame }: { game: Game, deleteGame: (id: string) => void }) {
  if (!game) return null;
  return (
    <View className="flex flex-row">
      <View className="flex-10 flex-col my-2">
        <Text
          role="heading"
          className="text-xl native:text-xl font-bold tracking-tighter"
        >
          {game.name}
        </Text>
        <Text className="max-w-[700px] text-sm text-gray-500 md:text-xl dark:text-gray-400">
          {game.start.toLocaleDateString()} - {game.start.toLocaleTimeString()}
        </Text>
      </View>
      <View className="flex-1 flex-row justify-end items-center p-2">
        <TouchableOpacity
          onPress={() => deleteGame(game.id)}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GameComponent;
