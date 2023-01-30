import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export const iconTheme = {
    color: COLORS.BASE.GRAY_200,
    size: SCALE.HEIGHT(2.7)
};

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
        marginBottom: SCALE.HEIGHT(1),
    },
    searchIcon: {
        position: 'absolute',
        right: SCALE.WIDTH(10),
        top: SCALE.HEIGHT(2),
        borderRightWidth: 1,
        borderRightColor: COLORS.BASE.GRAY_400,
        paddingRight: SCALE.WIDTH(3.5),
        marginRight: SCALE.WIDTH(1)
    },
    slideIcon: {
        position: 'absolute',
        right: SCALE.WIDTH(3),
        top: SCALE.HEIGHT(2)
    },
    filterBox: {
        flex: 1,
    }
});