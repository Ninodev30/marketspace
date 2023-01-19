import { useContext } from "react";
import { AuthContext, AuthContextDataProps } from "@contexts/AuthContext";

const useAuth: () => AuthContextDataProps = () => {
    const context: AuthContextDataProps = useContext(AuthContext);

    return context;
};

export default useAuth;