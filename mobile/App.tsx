import { StatusBar } from "react-native";
import Routes from "./src/routes";
import AuthContextProvider from "@context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor='transparent'
      />
      <Routes />
    </AuthContextProvider>
  )
}

export default App;