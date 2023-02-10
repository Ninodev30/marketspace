import { useCallback, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MagnifyingGlass, Sliders } from 'phosphor-react-native';
import { AppNavigatorRoutesProps } from 'src/routes/App.routes';
import api from '@services/api.';
import useAuth from '@hooks/useAuth';
import Ad from '@components/Ad';
import HomeHeader from '@components/HomeHeader';
import Sell from '@components/Sell';
import Input from '@components/Input';
import Filter from '@components/Filter';
import theme from '@theme/index';
import styles, { iconTheme } from './styles';
import useAppDispatch from '@hooks/useAppDispatch';
import { updateAuthState } from '@features/auth';
import useAppSelector from '@hooks/useAppSelector';
import { setAppIsLoading } from '@features/appLoading';

type User = {
    avatar: string,
    email: string,
    id: string,
    name: string,
    tel: string
};

const Home: React.FC = () => {
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [findAd, setFindAd] = useState<string>('');
    const [adList, setAdList] = useState<string[]>(['Tênis vermelho', 'Tênis vermelho', 'Bicicleta', 'Sofá', 'Bunda', 'Dinheiro', 'Gaveta', 'Tênis vermelho, Bicicleta', 'Sofá', 'Bunda', 'Dinheiro', 'Gaveta', 'Tênis vermelho', 'Bicicleta', 'Sofá', 'Bunda', 'Dinheiro', 'Gaveta'])

    const { filter: { isShowFilter, setIsShowFilter } } = useAuth();

    const dispatch = useAppDispatch();
    // const { auth: { user } } = useAppSelector(state => state)
    const { navigate } = useNavigation<AppNavigatorRoutesProps>();

    const handleChooseFilters: () => void = () => {
        setIsShowFilter(true);
    };


    const fetch = {
        user: async () => {
            try {
                const { data } = await api.get('/users/me');
                setUser(data);
            }
            catch (error) {
                console.log(error);
            }
        },
        products: async () => {
            try {
                setIsLoading(true);

                const response = await api.get('/users/products');
                console.log(response);
            }
            catch (error) {
                console.log(error);
                console.log(JSON.stringify(error))
            }
            finally {
                setIsLoading(false);
            }
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetch.user();
            fetch.products();
        }, [])
    );

    return (
        <View style={styles.container}>
            <HomeHeader
                userName={user.name}
                userPhoto='https://github.com/Ninodev30.png'
            />
            {isShowFilter ?
                <View style={styles.filterBox}>
                    <Filter />
                </View>
                :
                <View style={{ flex: 1 }}>
                    <Sell
                        ads={4}
                        myAdsFunctionButton={() => navigate('myAds')}
                    />
                    <View>
                        <View style={styles.findBox}>
                            <Text style={styles.title}>
                                Compre produtos variados
                            </Text>
                            <View>
                                <Input
                                    placeholder='Buscar anúncio'
                                    value={findAd}
                                    onChangeText={setFindAd}
                                    autoCorrect={false}
                                />
                                <TouchableOpacity style={styles.searchIcon}>
                                    <MagnifyingGlass
                                        color={iconTheme.color}
                                        size={iconTheme.size}
                                        weight='bold'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.slideIcon} onPress={handleChooseFilters}>
                                    <Sliders
                                        color={iconTheme.color}
                                        size={iconTheme.size}
                                        weight='bold'
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            data={adList}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <Ad
                                    title={item}
                                    price={59.9}
                                    used
                                    photo='data:image/jpeg;base64,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'
                                    userPhoto='https://github.com/Ninodev30.png'
                                    onPress={() => navigate('adDetails')}
                                />
                            )}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            contentContainerStyle={{
                                gap: theme.SCALE.HEIGHT(2),
                                paddingBottom: theme.SCALE.HEIGHT(32)
                            }}
                        />
                    </View>
                </View>
            }
        </View>
    )
}

export default Home;