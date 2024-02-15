import PrimaryButton from "@/components/Buttons/PrimaryButton";
import TextButton from "@/components/Buttons/TextButton";
import Text from "@/components/Text";
import { Image, View } from "react-native";
import { Link, useRouter } from "expo-router";

const Landing = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <View className="flex-1"></View>
      <View className="flex justify-end items-center bg-blue-500 px-5 py-10 rounded-t-3xl">
        <Text className="text-xl text-center font-esbuild-semibold text-gray-600 mt-5">
          Welcome to App
        </Text>
        <View className="mt-8 w-full items-center">
          <PrimaryButton
            title="Create Account"
            onPress={() => router.push("/register")}
            classname="mb-4"
          />
          <TextButton
            classname="text-gray-500"
            title="Sign In"
            onPress={() => router.push("/login")}
          />
        </View>
        <Text className="text-center mt-6 text-sm text-gray-500 font-normal">
          By tapping “Create account” or “Sign in”, you agree to our{" "}
          <Link className="underline" href="/terms_of_use" suppressHighlighting>
            <Text>Terms of Use</Text>
          </Link>
          . Learn how we process your data in our{" "}
          <Link
            href="/privacy_policy"
            className="underline"
            suppressHighlighting
          >
            <Text>Privacy Policy</Text>
          </Link>
          .
        </Text>
      </View>
    </View>
  );
};

export default Landing;
