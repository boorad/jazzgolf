import { useAccount, useCoState } from "@/app/jazz";
import GameList from "@/components/GameList";
import { Game, ListOfGames } from "@/schema";
import { Group } from "jazz-tools";
import { Text, TouchableOpacity, View } from "react-native";

function GameScreen() {
  const { me } = useAccount();
  const games = useCoState(ListOfGames, me.root?.games?.id, [{}]);

  const createGame = () => {
    const group = Group.create({ owner: me });
    group.addMember("everyone", "writer");
    const game = Game.create({ name: "My Game", start: new Date() }, { owner: group });
    games.push(game);
  };

  return (
    <View className="flex m-3">
      <TouchableOpacity
        onPress={createGame}
        className="bg-blue-500 p-4 rounded-md my-4"
      >
        <Text className="text-white font-semibold text-center">
          New Game
        </Text>
      </TouchableOpacity>
      <GameList games={games} />
    </View>
  );
}

export default GameScreen;
