import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE } = theme;

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SCALE.HEIGHT(5),
        marginBottom: SCALE.HEIGHT(2),
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100
    },
    backIcon: {
        position: 'absolute',
        left: 0
    },
});