import React from "react";
import ScreenLayout from "@/components/ScreenLayout";
import WebViewScreen from "@/components/WebView";

const TheSqueeze = () => {
  return (
    <ScreenLayout className="bg-blue-100">
      <WebViewScreen url="www.google.com" />
    </ScreenLayout>
  );
};

export default TheSqueeze;
