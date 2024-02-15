import { useApolloClient } from "@apollo/client";
import { useAuth } from "@clerk/clerk-expo";
import ConfirmationModal from "../Modals/ConfirmationModal";
import Constants from "expo-constants";
import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import * as Sentry from "sentry-expo";
import Text from "../Text";
import { useRouter } from "expo-router";
import { useDeleteUserMutation } from "../../graphql-types/src/graphql";
import DeleteAccountReasonPickerModal from "../Modals/DeleteAccountReasonPickerModal";
import DeleteWithConfirmationModal from "../Modals/DeleteWithConfirmationModal";
import { useToast } from "react-native-toast-notifications";

const FooterSection = () => {
  const router = useRouter();
  const { signOut } = useAuth();
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState(false);
  const [showLogOutModal, setShowLogOutModal] = useState(false);
  const [showDeleteReasonModal, setShowDeleteReasonModal] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [deleteUser] = useDeleteUserMutation();
  const toast = useToast();

  const onDelete = async () => {
    setIsLoading(true);
    try {
      const result = await deleteUser({
        variables: {
          reason: deleteReason,
        },
      });

      if (result.errors) {
        Sentry.Native.captureException(result.errors);
        return;
      }
      if (result.data?.deleteUser) {
        router.push("/landing");
      }
    } catch (error) {
      toast.show("", {
        type: "error",
      });
      Sentry.Native.captureException(error);
    } finally {
      setIsLoading(false);
      setShowDeleteConfirmationModal(false);
    }
  };

  const onLogOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      await client.clearStore();
    } catch (error) {
      toast.show("", {
        type: "error",
      });
      Sentry.Native.captureException(error);
    } finally {
      setIsLoading(false);
      setShowLogOutModal(false);
    }
  };

  return (
    <>
      <ConfirmationModal
        isLoading={isLoading}
        closeModal={() => setShowLogOutModal(false)}
        showModal={showLogOutModal}
        title="Ready to Log Out?"
        description="If you want to access again, you will have to provide your credentials. Are you sure you want to log out?"
        primaryButtonTitle="Log Out"
        secondaryButtonTitle="Cancel"
        primaryButtonOnPress={onLogOut}
        secondaryButtonOnPress={() => setShowLogOutModal(false)}
      />
      <DeleteAccountReasonPickerModal
        showModal={showDeleteReasonModal}
        closeModal={() => {
          setShowDeleteReasonModal(false);
          setDeleteReason("");
        }}
        onSave={(reason: string) => {
          setDeleteReason(reason);
          setShowDeleteReasonModal(false);
          setShowDeleteConfirmationModal(true);
        }}
      />
      <DeleteWithConfirmationModal
        isLoading={isLoading}
        closeModal={() => setShowDeleteConfirmationModal(false)}
        showModal={showDeleteConfirmationModal}
        title="We are sorry to see you go"
        description="We are sorry to see you go. Remember all your date will be erased from our systems and there is no way to recover it. Are you sure you want to delete your account?"
        confirmationHint="Before deleting your account, please type DELETE in the field below if you are sure to continue."
        primaryButtonTitle="Delete Account"
        secondaryButtonTitle="Cancel"
        primaryButtonOnPress={onDelete}
        secondaryButtonOnPress={() => setShowDeleteConfirmationModal(false)}
        expectedCode="DELETE"
        inputLabel='Type "DELETE"'
        inputErrorMsg="Write the word “DELETE” correctly"
      />
      <View className="mt-8">
        <TouchableOpacity onPress={() => setShowLogOutModal(true)}>
          <View className="bg-white flex-row px-5 py-4 items-center justify-center">
            <Text className="text-gray-900 text-base">Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-2 mb-8">
        <TouchableOpacity onPress={() => setShowDeleteReasonModal(true)}>
          <View className="bg-white flex-row px-5 py-4 items-center justify-center">
            <Text className="text-error-500 text-base">Delete Account</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="mt-4 mb-4 flex items-center">
        <Text className="text-xs mt-4" style={{ color: "#999999" }}>
          Version {Constants.expoConfig?.version ?? "0.0.0"}
        </Text>
        <Text className="text-xs" style={{ color: "#999999" }}>
          Mobile App
        </Text>
      </View>
    </>
  );
};

export default FooterSection;
