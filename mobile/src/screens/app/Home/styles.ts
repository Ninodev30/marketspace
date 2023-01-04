import { StyleSheet } from "react-native";
import theme from "@theme/index";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.BASE.GRAY_700
    },
    title: {
        fontSize: theme.FONTS.SIZES.XL,
        fontFamily: theme.FONTS.FAMILY.REGULAR,
        color: theme.COLORS.BASE.GRAY_200
    }
});