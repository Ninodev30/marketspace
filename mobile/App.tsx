import { StatusBar, View } from "react-native";
import SignIn from "@screens/SignIn"

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor='transparent'
      />
      <SignIn />
    </View>
  )
}

export default App;