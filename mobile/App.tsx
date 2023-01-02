import { StatusBar, View } from "react-native";
import SignIn from "@screens/SignIn"
import SignUp from "@screens/SignUp";
import Routes from "./src/routes";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor='transparent'
      />
      <Routes />
    </View>
  )
}

export default App;