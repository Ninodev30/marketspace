import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const { height, width } = Dimensions.get('window');

export default {
    COLORS: {
        BASE: {
            GRAY_100: '#1A181B',
            GRAY_200: '#3E3A40',
            GRAY_300: '#5F5B62',
            GRAY_400: '#9F9BA1',
            GRAY_500: '#D9D8DA',
            GRAY_600: '#EDECEE',
            GRAY_700: '#F7F7F8',
            WHITE: '#FFFFFF'
        },

        PRODUCT: {
            RED: '#EE7979',
            BLUE: '#364D9D',
            BLUE_LIGHT: '#647AC7'
        }
    },

    FONTS: {
        FAMILY: {
            REGULAR: 'Karla-Regular',
            BOLD: 'Karla-Bold'
        },

        SIZES: {
            XXS: RFValue(10, 812),
            XS: RFValue(12, 812),
            SM: RFValue(14, 812),
            MD: RFValue(16, 812),
            LG: RFValue(20, 812),
            XL: RFValue(24, 812)
        }
    },

    SCALE: {
        WIDTH: (size: number) => (width * (size * 0.01)),
        HEIGHT: (size: number) => (height * (size * 0.01)),
        AVERAGE: (size: number) => ((height * (size * 0.005)) + (width * (size * 0.005)))
    },

    PADDING: {
        SM: 24,
        LG: 48
    }
};