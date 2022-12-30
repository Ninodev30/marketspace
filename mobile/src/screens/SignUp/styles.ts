import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, HEIGHT, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600,
        padding: PADDING.LG,
        alignItems: 'center',
    },
    headerBox: {
        height: HEIGHT * 0.16,
        marginTop: HEIGHT * 0.03,
        marginBottom: HEIGHT * 0.1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    highlightBox: {
        alignItems: 'center',
    },
    inputBox: {
        height: HEIGHT * 0.57,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    formBox: {
        height: HEIGHT * 0.48,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100,
        marginBottom: HEIGHT * 0.01,
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'center'
    }
});