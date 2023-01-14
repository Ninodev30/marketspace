import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "phosphor-react-native";
import theme from "@theme/index";

const BackIcon: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
    const { goBack } = useNavigation();

    const iconTheme = {
        size: theme.SCALE.AVERAGE(4),
        color: theme.COLORS.BASE.GRAY_100
    };

    return (
        <TouchableOpacity onPress={goBack} {...rest}>
            <ArrowLeft
                size={iconTheme.size}
                color={iconTheme.color}
                weight='bold'
            />
        </TouchableOpacity>
    );
};

export default BackIcon;