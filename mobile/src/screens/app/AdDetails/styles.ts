import theme from "@theme/index";
import { StyleSheet } from "react-native";

const { COLORS, FONTS, SCALE, PADDING } = theme;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: PADDING.SM,
        backgroundColor: COLORS.BASE.GRAY_600
    },
    header: {
        flexDirection: 'row',
        paddingTop: SCALE.HEIGHT(6),
        paddingBottom: SCALE.HEIGHT(2),
        paddingHorizontal: PADDING.SM
    },
    adPhoto: {
        height: SCALE.HEIGHT(37),
    },
});