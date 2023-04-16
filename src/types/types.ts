export interface TCoin {
    CoinInfo: {
        Name: string,
        FullName: string,
        ImageUrl: string,
    },
    RAW: {
        USD: {
            PRICE:number,
            VOLUME24HOUR:number,
        },
    },
}
