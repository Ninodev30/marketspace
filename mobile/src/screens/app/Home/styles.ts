import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: PADDING.SM,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    title: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_300,
        marginBottom: SCALE.HEIGHT(1)
    },
    findBox: {
        marginBottom: SCALE.HEIGHT(1.5)
    },
    list: {
        alignSelf: 'stretch',
        // justifyContent: 'space-between'
    }
});