import React, { memo } from "react";
import { View, TouchableOpacity } from "react-native";
import BellIcon from "@/assets/svg/bell-icon.svg";
import BellIconNewNotification from "@/assets/svg/bell-new-notification-icon.svg";
import CogIcon from "@/assets/svg/cog-icon.svg";
import { useRouter } from "expo-router";
import { User } from "@/graphql-types/src/graphql";
import Text from "../Text";

interface TopNavigationProps {
  currentUser: User;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ currentUser }) => {
  const router = useRouter();
  const notifications: { [s: string]: any } | ArrayLike<any> = [];
  const hasUnreadNotifications = Object.values(notifications).some(
    (notification) => notification.read === false
  );

  return (
    <View className="my-2 flex-row items-center px-3">
      {currentUser && (
        <View className="flex-row flex-1 justify-start">
          {/* <TouchableOpacity
            className="w-[40px] h-[40px]"
            onPress={() => router.push("/")}
          ></TouchableOpacity> */}
        </View>
      )}
      <View className="flex-1 justify-center items-center">
        <Text>Mobile App</Text>
      </View>
      <View className="flex-row flex-1 justify-end gap-6 items-center ml-1">
        <TouchableOpacity onPress={() => router.push("/home")}>
          {hasUnreadNotifications ? (
            <BellIconNewNotification width={25} height={25} />
          ) : (
            <BellIcon width={25} height={25} />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings/settings")}>
          <CogIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(TopNavigation);
