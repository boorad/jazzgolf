# Jazz Questions

> Disclaimer: I've not read the core Jazz codebase, only tinkered w/ my own data model and read example apps code & Jazz tests so far.  These questions might be a bit naive.

## How can accounts and players co-exist

Accounts are user accounts in Jazz, and (I think) they can have extra fields after extending `Account` type, like `games` below.

Current code:

```ts
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
```

and elsewhere in our schema:

```ts
export class Player extends CoMap {
  name = co.string;
  email = co.string;
  short = co.string;
  handicap? = Handicap;
  // meta
  envs? = co.ref(ListOfEnvironments);
  level? = co.string;
}
```

We have the situation where players are not required to have an account to play a game.  One person can have a Jazz `Account` and score the game for all.  The others in the game could just be `Player` instances without the `Account` apparatus.  Of course we ultimately want the non-account players to accept the invite and sign up for our app :)

Should `Player` just extend `Account` and we get rid of `PlayerAccount`?  Is this possible to have a lighter-weight `Player extends Account` with the account stuffs missing?

Or have I already done this with `PlayerAccountRoot` and that should be renamed to `Player` with `games` field as well as `name`, `email`, `short`, `handicap`?  Maybe my question is answered by the `profile` and `root` functionality?

## Where do we stop the "collaboration"?

In the above example for `Player` you see `Handicap` but not as a `co.ref(Handicap)` like other fields in example apps.  `Handicap` is itself a `CoMap`:

```ts
export class Handicap extends CoMap {
  source = co.literal('ghin', 'manual');
  identifier = co.string;
}
```

Is the `handicap` field on `Player` class not being a `co.ref(Handicap)` incorrect?

Or if it's correct (i.e. we don't want a reference to a `Handicap`), then must we replace the entire field when editing the `Player` instance?  If this is the case, does `Handicap` need to extend CoMap?

It seems incorrect, because when I add `co.ref(Handicap)` and create a new `Handicap` instance while populating, it shows up in the `Player` instance.  It does not look to be present in the instance otherwise.  CoValues all the way down...

## Can you filter/query the data? Can the filter/query be used for replication as well as regular app needs?

A `Player` might have played in hundreds of `Game`s over a few years.  Can we only have the last 30 days of `ListOfGames`, based on some timestamp field in this case, replicated to an app/webpage?  If you wanted to see older ones, there is a way to fetch them, but "default" local sync/replication could be specified in some way in the schema.

The larger question here might be how do we not have the entire graph on each user's phone or browser?  I thought I heard something about that in your local-first podcast, but can't recall.

## Are edges uni-directional?

> TODO: not a well-defined question or need yet :)

```ts
class Parent extends CoMap {
  sub_thing = co.ref(Child);
}
```
sets up an edge.  Is this edge "from" the parent object and "to" the child object?

Or is it bi-directional, meaning you can traverse from "child" to "parent"?

This dictates whether we have to set up both directions if required.

I'm wondering here about `Player`s and `Game`s.  A player's list of games on the GameList page of the app should be all the games they have played in, whether they created the game and added other players or they were added by another player.  `games` might not be the right field on `PlayerAccountRoot` because it's only the ones that player created.

## Best practice for functions / schema

Should we add helper functions like `createGame()` or `addPlayerToGame()` to the classes in the schema files or keep them separate and have those files be schema-only?  What structures have you used yourself or seen emerge from other Jazz users?
