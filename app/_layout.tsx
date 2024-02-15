import { ApolloProvider } from "@apollo/client";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@/config/auth";
import { getApolloClient } from "@/graphql/client";
import React, { useEffect, useMemo } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as Sentry from "sentry-expo";
import { useValidateUserAndUpdateDeviceTokenMutation } from "@/graphql-types/src/graphql";
import theme from "@/utils/theme";
import Constants from "expo-constants";
import CustomToastProvider from "@/providers/CustomToastContext";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import { useToast } from "react-native-toast-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();
  const [validateUserAndUpdateDeviceToken] =
    useValidateUserAndUpdateDeviceTokenMutation();
  const toast = useToast();

  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: theme.extend.colors.blue[500],
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return;
      }
      token = await Notifications.getExpoPushTokenAsync({
        projectId:
          Constants.expoConfig?.extra?.eas?.projectId ??
          "a88d48b7-320d-4238-8b52-71cc231131ca",
      });
    } else {
      toast.show("Must use physical device for Push Notifications", {
        type: "error",
      });
    }

    return token;
  }

  const validateUser = async () => {
    const token = await registerForPushNotificationsAsync();

    const result = await validateUserAndUpdateDeviceToken({
      variables: { deviceToken: token?.data ?? "" },
    });

    const inTabsGroup = segments[0] === "(auth)";

    if (result.errors) {
      toast.show("", {
        type: "error",
      });
      Sentry.Native.captureException(result.errors);
      return;
    }

    router.replace("/home");
  };

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      void validateUser();
      router.replace("/home");
    } else if (!isSignedIn) {
      router.replace("/landing");
    }
  }, [isSignedIn]);

  return <Slot />;
};

const ApolloInitialization = () => {
  const { getToken } = useAuth();
  const client = useMemo(() => {
    return getApolloClient(getToken);
  }, [getToken]);

  return (
    <ApolloProvider client={client}>
      {/* <NotificationProvider>*/}
      <CustomToastProvider>
        <InitialLayout />
      </CustomToastProvider>
      {/*   </NotificationProvider> */}
    </ApolloProvider>
  );
};

export default function Layout() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ""}
      tokenCache={tokenCache}
    >
      <StatusBar style="dark" />
      <ApolloInitialization />
    </ClerkProvider>
  );
}
