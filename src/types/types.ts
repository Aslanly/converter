export interface TCoin {
    CoinInfo: {
        Name: string,
        FullName: string,
        ImageUrl: string,
        id: string;
    },
    RAW: {
        USD: {
            PRICE:number,
            VOLUME24HOUR:number,
        },
    },
}
