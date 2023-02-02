import { Asset } from "react-native-image-picker";
import PhotoFileProps from "src/@types/photoFile";

type Props = (photo: Asset, userName: string) => PhotoFileProps;

const AssetToPhotoFile: Props = (photo, userName) => {
    const fileExtension = photo.uri!.split('.').pop();

    const photoFile: PhotoFileProps = {
        name: `${userName}.${fileExtension}`.toLowerCase(),
        uri: photo.uri!,
        type: `${photo.type}/${fileExtension}`
    };

    return photoFile;
};

export default AssetToPhotoFile;