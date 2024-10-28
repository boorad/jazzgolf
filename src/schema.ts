import { Account, CoList, CoMap, Profile, co } from "jazz-tools";

export class Game extends CoMap {
  start = co.Date;
  name = co.string;
}

export class Player extends CoMap {
  name = co.string;
  short = co.string;
}

export class Round extends CoMap {
  start = co.Date;
}

export class ListOfGames extends CoList.Of(co.ref(Game)) {}

export class PlayerAccountRoot extends CoMap {
  games = co.ref(ListOfGames);
}

export class PlayerAccount extends Account {
  profile = co.ref(Profile);
  root = co.ref(PlayerAccountRoot);

  migrate(this: PlayerAccount, creationProps?: { name: string }) {
    super.migrate(creationProps);
    if (!this._refs.root) {
      this.root = PlayerAccountRoot.create(
        {
          games: ListOfGames.create([], { owner: this }),
        },
        { owner: this }
      );
    }
  }
}
