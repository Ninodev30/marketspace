import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600,
        padding: PADDING.LG,
        alignItems: 'center',
    },
    headerBox: {
        height: SCALE.HEIGHT(16),
        marginBottom: SCALE.HEIGHT(4),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    highlightBox: {
        alignItems: 'center',
    },
    scrollBox: {
        alignSelf: 'stretch'
    },
    userBox: {
        width: SCALE.AVERAGE(17),
        height: SCALE.AVERAGE(17),
        borderRadius: SCALE.HEIGHT(100),
        marginBottom: 10,
        backgroundColor: COLORS.BASE.GRAY_500,
        borderColor: COLORS.PRODUCT.BLUE_LIGHT,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: SCALE.AVERAGE(16),
        height: SCALE.AVERAGE(16),  
        borderRadius: SCALE.HEIGHT(100),

    },
    pencilBox: {
        position: 'absolute',
        bottom: -7,
        right: -7,
        padding: 10,
        borderRadius: SCALE.HEIGHT(100),
        backgroundColor: COLORS.PRODUCT.BLUE_LIGHT,
    },
    inputBox: {
        alignSelf: 'stretch'
    },
    input: {
        marginVertical: SCALE.HEIGHT(0.8)
    },
    formBox: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    loginBox: {
        marginTop: SCALE.HEIGHT(4),
        alignSelf: 'stretch'
    },
    title: {
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.LG,
        color: COLORS.BASE.GRAY_100,
        marginBottom: SCALE.HEIGHT(1),
    },
    subtitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
        textAlign: 'center'
    }
});