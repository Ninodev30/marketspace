import { Pressable, PressableProps, Text } from "react-native";
import { XCircle } from "phosphor-react-native";
import theme from "@theme/index";
import styles from "./styles";

type Props = PressableProps & {
    title: string;
    isSelected: boolean;
}

const ConditionButton: React.FC<Props> = ({ title, isSelected, ...rest }) => {
    return (
        <Pressable
            style={[styles.container, isSelected ? styles.containerSelected : styles.containerUnselected]}
            {...rest}
        >
            <Text style={[styles.title, isSelected ? styles.titleSelected : styles.titleUnselected]}>
                {title}
            </Text>
            {isSelected &&
                <XCircle
                    style={{ marginRight: theme.SCALE.WIDTH(3) }}
                    color={theme.COLORS.BASE.WHITE}
                    size={theme.SCALE.AVERAGE(2.4)}
                    weight='fill'
                />
            }
        </Pressable>
    );
};

export default ConditionButton;