import { useCoState } from "@/providers/jazz";
import { Game } from "@/providers/jazz/schema";
import { ID } from "jazz-tools";

export function getGameFromParams(params) {
  const { gameId } = params;
  if (!gameId) return null;

  const gameIdParsed = gameId.toString() as ID<Game>;
  return useCoState(Game, gameIdParsed);
}
