import { useState } from "react";
import CloseButton from "../Modals/CloseButton";
import Text from "../Text";
import { Modal, ScrollView, View } from "react-native";
import RadioButtonExtended from "../Inputs/RadioButtonExtended";
import PrimaryButton from "../Buttons/PrimaryButton";

const DELETE_ACCOUNT_REASONS = [
  {
    id: 0,
    title: "Reason not listed",
    description: "",
  },
];

interface Props {
  showModal: boolean;
  closeModal: () => void;
  onSave: (reason: string) => void;
}

const DeleteAccountReasonPickerModal = ({
  onSave,
  showModal,
  closeModal,
}: Props) => {
  const [selectedReason, setSelectedReason] = useState<string>("");

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      presentationStyle="formSheet"
    >
      <View className="pt-6 pr-5 items-end mb-5">
        <CloseButton
          closeModal={() => {
            setSelectedReason("");
            closeModal();
          }}
        />
      </View>

      <View className="flex-1 px-5 mb-4">
        <View className="flex-1">
          <Text className="text-2xl font-esbuild-semibold mb-2 text-gray-600">
            Are you sure you want to delete your account?
          </Text>
          <Text className="text-base text-gray-900 opacity-60">
            Please select a reason
          </Text>
          <ScrollView className="mt-6" showsVerticalScrollIndicator={false}>
            {DELETE_ACCOUNT_REASONS.map((reason) => (
              <RadioButtonExtended
                key={reason.id}
                title={reason.title}
                description={reason.description}
                value={reason.title}
                checked={selectedReason === reason.title}
                onChange={() => setSelectedReason(reason.title)}
              />
            ))}
          </ScrollView>
        </View>
        <View className="flex-2 justify-end pt-6 items-center">
          <PrimaryButton
            title="Save"
            onPress={() => onSave(selectedReason)}
            disabled={selectedReason === ""}
            isLoading={false}
            className="mb-4"
          />
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountReasonPickerModal;
