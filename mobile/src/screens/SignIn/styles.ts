import { Dimensions, StyleSheet } from "react-native";
import theme from "@theme/index";

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: theme.COLORS.BASE.GRAY_700
    },
    content: {
        width: width,
        height: height * 0.7,
        alignItems: 'center',
        padding: 48,
        borderRadius: 15,
        backgroundColor: theme.COLORS.BASE.GRAY_600
    },
    headerBox: {
        width: width * 0.55,
        height: height * 0.22,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    highLightBox: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: theme.FONTS.FAMILY.BOLD,
        fontSize: theme.FONTS.SIZES.XL,
        color: theme.COLORS.BASE.GRAY_100
    },
    subtitle: {
        fontFamily: theme.FONTS.FAMILY.REGULAR,
        fontSize: theme.FONTS.SIZES.SM,
        color: theme.COLORS.BASE.GRAY_300
    },
    titleAccount: {
        fontFamily: theme.FONTS.FAMILY.REGULAR,
        fontSize: theme.FONTS.SIZES.SM,
        color: theme.COLORS.BASE.GRAY_200
    }
});