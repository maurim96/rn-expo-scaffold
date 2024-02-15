import React, { memo, useEffect } from "react";
import { View } from "react-native";
import { User, useCurrentUserQuery } from "@/graphql-types/src/graphql";
import TopNavigation from "@/components/Home/TopNavigation";
import ScreenLayout from "@/components/ScreenLayout";
import Text from "@/components/Text";
import * as Notifications from "expo-notifications";

const Home = () => {
  const currentUserQuery = useCurrentUserQuery();

  const currentUser = currentUserQuery.data?.me as User;

  useEffect(() => {
    currentUserQuery.refetch();
  }, [currentUserQuery]);

  useEffect(() => {
    const responseListener =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const notificationContent = response?.notification?.request?.content;
        if (notificationContent && notificationContent.data) {
          // TODO: add logic to handle the incoming push notification
        }
      });

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  return (
    <ScreenLayout className="bg-blue-50 flex-1">
      <View className="flex flex-1 px-4">
        <TopNavigation currentUser={currentUser} />
        <View>
          <Text className="text-2xl font-bold mt-4">
            Welcome to Mobile App!
          </Text>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default memo(Home);
