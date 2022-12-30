import { StatusBar, View } from "react-native";
import SignIn from "@screens/SignIn"
import SignUp from "@screens/SignUp";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor='transparent'
      />
      <SignUp />
    </View>
  )
}

export default App;