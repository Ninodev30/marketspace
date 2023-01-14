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
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SCALE.HEIGHT(4),
        marginBottom: SCALE.HEIGHT(2),
    },
    title: {

    },
    addIcon: {
        position: 'absolute',
        right: 0
    }
});