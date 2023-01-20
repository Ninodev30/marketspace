import { ReactNode } from 'react';
import { Text, View, ViewProps } from 'react-native'
import BackIcon from '@components/BackIcon';
import styles from './styles';

type Props = ViewProps & {
    title: string;
    backIcon?: boolean;
    children?: ReactNode;
}

const Header: React.FC<Props> = ({ title, backIcon = false, children, style, ...rest }) => {
    return (
        <View style={[styles.container, style]} {...rest}>
            {backIcon && <BackIcon style={styles.backIcon} />}
            <Text style={styles.title}>
                {title}
            </Text>
            {children}
        </View>
    );
};

export default Header;