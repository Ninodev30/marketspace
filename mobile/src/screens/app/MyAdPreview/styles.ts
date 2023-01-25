import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    content: {
        flex: 1,
        margin: 100
    },
    image: {
        height: 100,
        width: 100
    }
});