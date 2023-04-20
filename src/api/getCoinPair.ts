import axios from "axios";

export const getCoinPair = (firstCoinName: string, secondCoinName: string) => {
    return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${firstCoinName}&tsyms=${secondCoinName}`)
}