import theme from "@theme/index";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.FONTS.FAMILY.BOLD,
        fontSize: theme.FONTS.SIZES.SM,
        color: theme.COLORS.BASE.GRAY_200,
        marginLeft: theme.SCALE.WIDTH(1.5)
    }
});