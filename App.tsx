import React from "react";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { BaseTheme } from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";
import { Splash } from "./src/screens/Splash";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={BaseTheme}>
        <Splash />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={BaseTheme}>
      <Dashboard />
    </ThemeProvider>
  );
}
