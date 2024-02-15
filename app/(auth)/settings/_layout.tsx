import theme from "@/utils/theme";
import React from "react";
import { Stack, useRouter } from "expo-router";
import StackHeader from "@/components/StackHeader";

const SettingsLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: theme.extend.colors.blue[50],
        },
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        header(props) {
          return (
            <StackHeader
              props={props}
              onCustomBack={() => {
                router.back();
              }}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          headerTitle: "Settings",
          headerBackVisible: true,
          header(props) {
            return (
              <StackHeader
                props={props}
                onCustomBack={() => {
                  router.replace("/home");
                }}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="privacy_policy"
        options={{
          headerTitle: "Privacy Policy",
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="terms_of_service"
        options={{
          headerTitle: "Terms of Service",
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="send_a_comment"
        options={{
          headerTitle: "Send a comment",
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
};

export default SettingsLayout;
