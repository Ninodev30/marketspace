import { StyleSheet } from "react-native";
import theme from "@theme/index";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: SCALE.HEIGHT(8),
        paddingBottom: SCALE.HEIGHT(2),
        paddingHorizontal: PADDING.SM
    },
    content: {
        paddingBottom: SCALE.HEIGHT(3),
        marginBottom: SCALE.HEIGHT(3),
    },
    adPhoto: {
        height: SCALE.HEIGHT(37),
    },
    opacityAdPhoto: {
        opacity: 0.4
    },
    opacityAdPhotoBox: {
        justifyContent: 'center',
        backgroundColor: theme.COLORS.BASE.GRAY_100
    },
    inactivatedText: {
        alignSelf: 'center',
        position: 'absolute',
        textTransform: 'uppercase',
        fontFamily: FONTS.FAMILY.BOLD,
        fontSize: FONTS.SIZES.SM,
        color: COLORS.BASE.GRAY_700
    },
    footer: {
        paddingHorizontal: PADDING.SM,
        gap: SCALE.HEIGHT(1)
    }
});