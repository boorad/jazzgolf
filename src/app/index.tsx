import React, { StrictMode } from "react";
import { useDemoAuth, DemoAuthBasicUI } from "jazz-react-native";
import { Jazz } from "./jazz";
import Home from "./home";

function App() {
  const [auth, state] = useDemoAuth();

  return (
    <StrictMode>
      <Jazz.Provider
        auth={auth}
        peer="wss://cloud.jazz.tools/?key=jazzgolf@gcmp.io"
        storage={undefined}
      >
        <Home />
      </Jazz.Provider>
      {
        state.state !== "signedIn"
          ? (<DemoAuthBasicUI appName="JazzGolf" state={state} />)
          : null
      }
    </StrictMode>
  );
}

export default App;
