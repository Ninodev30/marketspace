import AdTradeTypeProps from "./adTrade";

type AdTypeProps = {
    ad: AdTradeTypeProps;
    title: string;
    description: string;
    price: number;
    adPhotos?: string[];
    user?: {
        name: string;
        photo: string;
    };
};

export default AdTypeProps;