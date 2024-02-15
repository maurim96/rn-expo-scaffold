import { Ionicons } from "@expo/vector-icons";
import { SettingsItem } from "./constants";
import { useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import Text from "../Text";

const NavigationItem = ({ item }: { item: SettingsItem }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`${item.navigateTo}` as any);
      }}
    >
      <View className="bg-white flex-row px-5 py-4 items-center">
        <View className="flex-row flex-1 items-center">
          {item.icon}
          <Text className="text-gray-900 text-base ml-4">{item.title}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#D6D6D6" />
      </View>
    </TouchableOpacity>
  );
};

export default NavigationItem;
