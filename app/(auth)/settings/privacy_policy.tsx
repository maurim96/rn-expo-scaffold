import WebViewScreen from "@/components/WebView";
import { PRIVACY_POLICY_URL } from "@/constants/urls";

const PrivacyPolicy = () => {
  return <WebViewScreen url={PRIVACY_POLICY_URL} />;
};

export default PrivacyPolicy;
