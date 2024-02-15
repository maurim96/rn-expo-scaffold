const IS_DEV = process.env.APP_VARIANT === "development";

// TODO: update this file based on your app's needs
export default {
  name: IS_DEV ? "App Dev" : "App",
  slug: "rn-expo-scaffold",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    "image": "./assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    bundleIdentifier: IS_DEV ? "com.rn-expo-scaffold.app.dev" : "com.rn-expo-scaffold.app",
    "supportsTablet": true
  },
  android: {
    package: IS_DEV ? "com.rn-expo-scaffold.app.dev" : "com.rn-expo-scaffold.app",
    adaptiveIcon: {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    }
  },
  plugins: [
    "expo-router",
    "expo-secure-store",
    "sentry-expo",
  ],
  experiments: {
    "typedRoutes": true
  },
  runtimeVersion: {
    policy: "appVersion",
  },
  extra: {
    eas: {
      projectId: "YOUR_PROJECT_ID",
    },
  },
}
