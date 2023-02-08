import AsyncStorage from "@react-native-async-storage/async-storage";
import USER_STORAGE from "@storage/user/config";
import UserDTO from "src/dtos/UserDTO";

const userStorage = {
    save: async (user: UserDTO) => {
        try {
            const storage: string = JSON.stringify(user);
            await AsyncStorage.setItem(USER_STORAGE, storage);
        }
        catch (error) {
            throw error;
        }
    },
    get: async () => {
        try {
            const storage: string | null = await AsyncStorage.getItem(USER_STORAGE);
            const user: UserDTO = storage ? JSON.parse(storage) : {};

            return user;
        }
        catch (error) {
            throw error;
        }
    },
    delete: async () => {
        try {
            await AsyncStorage.removeItem(USER_STORAGE);
        }
        catch (error) {
            throw error;
        }
    }
};

export default userStorage;