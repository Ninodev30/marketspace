import { StatusBar, View } from "react-native";
import Routes from "./src/routes";
import theme from "@theme/index";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.BASE.GRAY_600 }}>
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