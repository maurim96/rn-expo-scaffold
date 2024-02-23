import * as Sentry from "sentry-expo";
import { useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FontAwesome } from "@expo/vector-icons";

import "../styles.css";

const executionEnvironment: string =
  Constants.expoConfig?.ios?.bundleIdentifier ??
  Constants.expoConfig?.android?.package ??
  "";

Sentry.init({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DNS,
  enableInExpoDevelopment: false,
  debug: executionEnvironment === "com.rn-expo-scaffold.app.dev" ? true : false,
  environment:
    executionEnvironment === "com.rn-expo-scaffold.app.dev"
      ? "development"
      : "production",
});

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoaded, error] = useFonts({
    "esbuild-regular": require("../assets/fonts/ESBuild-Regular.ttf"),
    "esbuild-medium": require("../assets/fonts/ESBuild-Medium.ttf"),
    "esbuild-semibold": require("../assets/fonts/ESBuild-Semibold.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View
      className="flex-1 justify-center items-center bg-blue-500"
      onLayout={handleOnLayout}
    >
      <Text>Mobile App</Text>
    </View>
  );
};

export default App;
