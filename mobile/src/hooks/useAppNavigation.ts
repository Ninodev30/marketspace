import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "src/routes/App.routes";

const useAppNavigation = () => useNavigation<AppNavigatorRoutesProps>();

export default useAppNavigation;