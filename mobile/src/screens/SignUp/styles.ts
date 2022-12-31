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
        marginBottom: HEIGHT * 0.05,
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
        justifyContent: 'space-between'
    },
    userBox: {
        width: HEIGHT * 0.11,
        height: HEIGHT * 0.11,
        borderRadius: HEIGHT,
        backgroundColor: COLORS.BASE.GRAY_500,
        borderColor: COLORS.PRODUCT.BLUE_LIGHT,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    pencilBox: {
        padding: 10,
        position: 'absolute',
        bottom: -7,
        right: -7,
        borderRadius: HEIGHT,
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT,
    },
    formBox: {
        height: HEIGHT * 0.48,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginBox: {
        marginTop: HEIGHT * 0.05,
        alignSelf: 'stretch',
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