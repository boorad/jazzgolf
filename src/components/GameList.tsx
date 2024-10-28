import { FlatList, Text, View } from "react-native";
import GameComponent from "@/components/GameComponent";
import { ListOfGames } from "@/schema";

function GameList({ games }: { games: ListOfGames }) {

  const deleteGame = (id: string) => {
    const idx = games.findIndex((game) => game.id === id);
    games.splice(idx, 1);
  };

  return (
    <View className="flex">
      <FlatList
        data={games}
        renderItem={({ item }) => <GameComponent game={item} deleteGame={deleteGame} />}
        keyExtractor={(item) => item?.id}
      />
    </View>
  );
}

export default GameList;
