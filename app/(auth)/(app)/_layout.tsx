import { useAuth } from "@clerk/clerk-expo";
import { Tabs } from "expo-router";
import theme from "@/utils/theme";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TabsPage = () => {
  const { isSignedIn, userId } = useAuth();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.extend.colors.blue[100],
        },
        headerTintColor: theme.extend.colors.blue[500],
        headerTitleStyle: {
          fontFamily: "esbuild-semibold",
          fontSize: 18,
        },
        tabBarActiveTintColor: theme.extend.colors.blue[900],
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarStyle: {
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused && "bg-green-500 px-5 py-1.5 rounded-3xl"}`}
            >
              <AntDesign name="home" size={24} />
            </View>
          ),
          tabBarLabel: "Home",
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="find"
        options={{
          headerTitle: "Find",
          tabBarIcon: ({ focused }) => (
            <View
              className={`${focused && "bg-green-500 px-5 py-1.5 rounded-3xl"}`}
            >
              <AntDesign name="search1" size={24} />
            </View>
          ),
          tabBarLabel: "Find",
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;
