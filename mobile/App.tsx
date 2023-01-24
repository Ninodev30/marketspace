import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "src/store";
import Routes from "./src/routes";
import AuthContextProvider from "@contexts/AuthContext";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor='transparent'
        />
        <Routes />
      </AuthContextProvider>
    </Provider>
  )
}

export default App;