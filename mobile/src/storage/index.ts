import tokenStorage from "./token";
import userStorage from "./user";

const storage = {
    user: userStorage,
    token: tokenStorage
};

export default storage;