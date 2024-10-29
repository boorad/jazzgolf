import { Stack } from "expo-router/stack";

export default function GameLayout() {
  return (
    <Stack initialRouteName="settings">
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="scoring"
        options={{
          title: "Scoring",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
