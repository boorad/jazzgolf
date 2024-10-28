import { createJazzRNApp, useDemoAuth } from "jazz-react-native";
import { PlayerAccount } from "../schema";

export const Jazz = createJazzRNApp({ AccountSchema: PlayerAccount });
export const { useAccount, useCoState, useAcceptInvite } = Jazz;
