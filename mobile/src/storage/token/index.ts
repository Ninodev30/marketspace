import AsyncStorage from "@react-native-async-storage/async-storage";
import AUTH_TOKEN_STORAGE from "./config";

const tokenStorage = {
    save: async (token: string) => {
        try {
            await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
        }
        catch (error) {
            throw error;
        }
    },
    get: async () => {
        try {
            const token = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE) as string;

            return token;
        }
        catch (error) {
            throw error;
        }
    },
    delete: async () => {
        try {
            await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
        }
        catch (error) {
            throw error;
        }
    }
};

export default tokenStorage;