import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "src/routes/Auth.routes";

const useAuthNavigation = () => useNavigation<AuthNavigatorRoutesProps>();

export default useAuthNavigation;