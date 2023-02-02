import { Alert } from "react-native";
import { Asset, ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";

const analyzePhoto: (image: Asset) => Asset | undefined = (image) => {
    const limitSizeInMB: number = 5 * 1024 * 1024;  // 5MB
    const isImageSizeOverLimit: boolean = image.fileSize! > limitSizeInMB;

    if (isImageSizeOverLimit) {
        Alert.alert('Adicionar foto', 'Escolha uma imagem com tamanho menor que 5MB');
        return undefined;
    };

    return image;
};

export const handlePickPhoto: () => Promise<Asset | undefined> = async () => {
    try {
        const photoSelected: ImagePickerResponse = await launchImageLibrary({
            mediaType: 'photo'
        });

        if (photoSelected.didCancel)
            return;

        const imageSelected: Asset = photoSelected.assets![0];
        const analyzedImage: Asset | undefined = analyzePhoto(imageSelected);

        return analyzedImage;
    }
    catch (error) {
        throw error;
    }
};

export const handleTakePhoto: () => Promise<Asset | undefined> = async () => {
    try {
        const photoSelected: ImagePickerResponse = await launchCamera({
            mediaType: 'photo',
        });

        if (photoSelected.didCancel)
            return;

        const imageSelected: Asset = photoSelected.assets![0];
        const analyzedImage: Asset | undefined = analyzePhoto(imageSelected);

        return analyzedImage;
    }
    catch (error) {
        throw error;
    }
};