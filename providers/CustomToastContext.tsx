import React, { ReactNode } from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { ToastProps } from "react-native-toast-notifications/lib/typescript/toast";
import theme from "@/utils/theme";
import { View } from "react-native";
import CheckCircleImage from "@/assets/svg/check-circle.svg";
import ExclamationImage from "@/assets/svg/exclamation.svg";
import XCircleImage from "@/assets/svg/x-circle.svg";
import Text from "@/components/Text";
import { TOASTER_DURATION } from "@/constants/config";

type CustomToastProviderProps = {
  children: ReactNode;
};

const CustomToastProvider: React.FC<CustomToastProviderProps> = ({
  children,
}) => {
  return (
    <ToastProvider
      duration={TOASTER_DURATION}
      dangerColor={theme.extend.colors.error[50]}
      successColor={theme.extend.colors.green[100]}
      warningColor={theme.extend.colors.warning[50]}
      renderToast={(props: ToastProps) => {
        switch (props.type) {
          case "error":
            return (
              <View
                className="w-[90%] bg-error-50 p-4 rounded-md shadow-lg flex-row items-center"
                style={props.style}
              >
                <XCircleImage height={22} width={22} />
                <Text className="text-sm text-error-900 ml-2 pr-4">
                  {props.message || "Something went wrong. Please try again"}
                </Text>
              </View>
            );
          case "success":
            return (
              <View
                className="w-[90%] bg-green-100 p-4 rounded-md shadow-lg flex-row items-center"
                style={props.style}
              >
                <CheckCircleImage height={22} width={22} />
                <Text className="text-sm text-green-900 ml-2 pr-4">
                  {props.message || "Success"}
                </Text>
              </View>
            );
          case "warning":
            return (
              <View
                className="w-[90%] bg-warning-50 p-4 rounded-md shadow-lg flex-row items-center"
                style={props.style}
              >
                <ExclamationImage height={22} width={22} />
                <Text className="text-sm text-warning-900 ml-2 pr-4">
                  {props.message || "Warning"}
                </Text>
              </View>
            );
          default:
            return (
              <View
                className="w-[90%] bg-blue-50 p-4 rounded-md shadow-lg flex-row items-center"
                style={props.style}
              >
                <Text className="text-sm text-blue-900 pr-4">
                  {props.message || "Info message"}
                </Text>
              </View>
            );
        }
      }}
    >
      {children}
    </ToastProvider>
  );
};

export default CustomToastProvider;
