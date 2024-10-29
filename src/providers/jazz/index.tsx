import { createJazzRNApp } from "jazz-react-native";
import { PlayerAccount } from "@/providers/jazz/schema";

export const Jazz = createJazzRNApp({ AccountSchema: PlayerAccount });
export const { useAccount, useCoState, useAcceptInvite } = Jazz;
