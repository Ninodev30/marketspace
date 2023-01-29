import { Asset } from "react-native-image-picker";

type AddAdPhotoTypeProps = {
    pick: () => Promise<void>;
    take: () => Promise<void>;
    analyze: (image: Asset) => Promise<void>;
};

export default AddAdPhotoTypeProps;