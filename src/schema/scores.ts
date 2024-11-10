import { co, CoList, CoMap } from "jazz-tools";
import { Player } from "./players";

export class Score extends CoMap {
  seq = co.number;
  values = co.ref(ListOfValues);
  history = co.ref(ListOfScoreUpdate);
}

export class Value extends CoMap {
  k = co.string;
  v = co.string;
  at = co.Date;
}

export class ScoreUpdate extends CoMap {
  by = co.ref(Player);
  at = co.Date;
  // TODO: store the previous score fields here (in a CoMap?)
  // value = co.ref(Score);
}

export class ListOfScores extends CoList.Of(co.ref(Score)) {}

export class ListOfValues extends CoList.Of(co.ref(Value)) {}

export class ListOfScoreUpdate extends CoList.Of(co.ref(ScoreUpdate)) {}