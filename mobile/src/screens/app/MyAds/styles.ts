import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, PADDING, SCALE } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    content: {
        padding: PADDING.SM,
        marginBottom: SCALE.HEIGHT(3),
    },
    addButton: {
        position: 'absolute',
        right: 0
    },
    adListHeader: {
        zIndex: 1,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
    adListHeaderTitle: {
        fontFamily: FONTS.FAMILY.REGULAR,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_200,
    },
    adListHeaderFilter: {
        width: SCALE.WIDTH(28),
        marginTop: SCALE.HEIGHT(2)
    },
    adListHeaderFilterContent: {
        padding: SCALE.AVERAGE(1.4),
        borderRadius: SCALE.AVERAGE(1),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: COLORS.BASE.GRAY_400
    },
    adListHeaderFilterContentSelected: {
        borderColor: COLORS.BASE.GRAY_200
    },
    adListHeaderFilterBox: {
        borderRadius: SCALE.AVERAGE(1.2),
        gap: SCALE.HEIGHT(2),
        padding: SCALE.AVERAGE(2),
        backgroundColor: COLORS.BASE.GRAY_700,
    },
    adListHeaderFilterTitleSelected: {
        fontFamily: FONTS.FAMILY.BOLD,
    }
});