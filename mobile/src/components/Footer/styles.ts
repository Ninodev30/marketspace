import { StyleSheet } from "react-native";
import theme from "@theme/index";

export default StyleSheet.create({
    container: {
        height: theme.SCALE.HEIGHT(12),
        padding: theme.PADDING.SM,
        backgroundColor: theme.COLORS.BASE.GRAY_700,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});