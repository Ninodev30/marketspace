import { createContext, ReactNode, useState } from 'react';
import { Alert } from 'react-native';
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AdTypeProps from 'src/@types/ad';
import AddAdPhotoTypeProps from 'src/@types/addAdPhoto';
import AdTradeTypeProps from 'src/@types/adTrade';
import ContextMethodsTypeProps from 'src/@types/contextMethods';
import PaymentMethodsTypes from 'src/@types/paymentMethods';

export type AuthContextDataProps = {
    user: any;
    filter: {
        isShowFilter: boolean;
        setIsShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
    };
    filterOptions: AdTradeTypeProps;
    adData: AdTypeProps;
    methods: ContextMethodsTypeProps;
};

type AuthContextProviderProps = {
    children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [user, setUser] = useState('test');
    const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
    const [filterOptions, setFilterOptions] = useState<AdTradeTypeProps>({
        used: false,
        switch: false,
        payment: {
            bankSlip: false,
            pix: false,
            money: false,
            creditCard: false,
            bankDeposit: false
        }
    });
    const [adData, setAdData] = useState<AdTypeProps>({
        ad: {
            used: false,
            switch: true,
            payment: {
                bankSlip: false,
                pix: true,
                money: true,
                creditCard: false,
                bankDeposit: true
            }
        },
        title: 'Bicicleta',
        description: 'Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.',
        price: 120,
        adPhotos: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sFYCSH51fxxrIJ6xusuCyzrMLSO-4_RRtg&usqp=CAU'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sFYCSH51fxxrIJ6xusuCyzrMLSO-4_RRtg&usqp=CAU'
            , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sFYCSH51fxxrIJ6xusuCyzrMLSO-4_RRtg&usqp=CAU'
        ],
        user: {
            name: 'Enzo Damascena',
            photo: 'https://github.com/Ninodev30.png'
        }
    });

    const AddAdPhoto: AddAdPhotoTypeProps = {
        pick: async () => {
            try {
                const photoSelected: ImagePickerResponse = await launchImageLibrary({
                    mediaType: 'photo',
                });

                if (photoSelected.didCancel)
                    return;

                AddAdPhoto.analyze(photoSelected.assets![0]);
            }
            catch (error) {
                throw error;
            }
        },
        take: async () => {
            try {
                const photoSelected: ImagePickerResponse = await launchCamera({
                    mediaType: 'photo'
                });

                if (photoSelected.didCancel)
                    return;

                AddAdPhoto.analyze(photoSelected.assets![0]);
            }
            catch (error) {
                throw error;
            }
        },
        analyze: async (image) => {
            try {
                const limitSizeInMB: number = 5 * 1024 * 1024;  // 5MB
                const isImageSizeUnderLimit: boolean = image.fileSize! < limitSizeInMB;

                if (isImageSizeUnderLimit)
                    console.log(image);
            }
            catch (error) {
                throw error;
            }
        }
    };

    const methods: ContextMethodsTypeProps = {
        handleFilter: {
            condition: (select: boolean) => setFilterOptions(prevState => ({
                ...prevState,
                used: select
            })),
            switch: () => setFilterOptions(prevState => ({
                ...prevState,
                switch: !prevState.switch
            })),
            payment: (paymentMethod: PaymentMethodsTypes) => setFilterOptions(prevState => ({
                ...prevState,
                payment: {
                    ...prevState.payment,
                    [paymentMethod]: !prevState.payment[paymentMethod]
                }
            }))
        },
        handleAdData: {
            trade: {
                condition: (select: boolean) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        used: select
                    }
                })),
                switch: () => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        switch: !prevState.ad.switch
                    }
                })),
                payment: (paymentMethod: PaymentMethodsTypes) => setAdData(prevState => ({
                    ...prevState,
                    ad: {
                        ...prevState.ad,
                        payment: {
                            ...prevState.ad.payment,
                            [paymentMethod]: !prevState.ad.payment[paymentMethod]
                        }
                    }
                }))
            },
            photo: {
                add: (photo) => setAdData(prevState => ({
                    ...prevState,
                    adPhotos: [
                        ...prevState.adPhotos!,
                        photo
                    ]
                })),
                remove: (photoNumber) => setAdData(prevState => ({
                    ...prevState,
                    adPhotos: [
                        ...prevState.adPhotos!.filter((_, index) => index !== photoNumber)
                    ]
                }))
            }
        },
        handleAddPhoto: async (title) => {
            try {
                Alert.alert(title, 'Adicionar foto', [
                    {
                        text: 'Cancelar',
                        style: 'cancel'
                    },
                    {
                        text: 'Tirar foto',
                        onPress: async () => await AddAdPhoto.take()
                    },
                    {
                        text: 'Acessar galeria',
                        onPress: async () => await AddAdPhoto.pick()
                    }
                ])
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                filter: {
                    isShowFilter,
                    setIsShowFilter
                },
                adData,
                filterOptions,
                methods
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;