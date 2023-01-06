import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
        backgroundColor: COLORS.BASE.GRAY_600
    },
});