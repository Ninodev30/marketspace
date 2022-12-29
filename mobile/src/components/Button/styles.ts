import { Dimensions, StyleSheet } from "react-native";
import theme from "@theme/index";

const width: number = Dimensions.get('window').width;
const height: number = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        width: width - 48,
        height: height * 0.05,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.FONTS.FAMILY.BOLD,
        fontSize: theme.FONTS.SIZES.SM,
    }
});