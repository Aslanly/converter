import {makeAutoObservable, toJS} from 'mobx';
import {TCoin} from "../types/types";
import getCoin from "../api/getCoin";
import {getCoinPair} from "../api/getCoinPair";
import {log} from "util";

class CoinStore {

    firstCoinName = 'BTC';
    secondCoinName = 'USDT';

    pairValue?:number;

    firstCoinValue = 1;
    secondCoinValue?:number;

    coins:TCoin[] = []
    constructor() {
        makeAutoObservable(this)
    }

    setCoin = async () => {
        try {
            const {data} = await getCoin();
            this.coins = data.Data;
            // console.log(toJS(this.coins))

        } catch (error) {
            console.log(error)
        }
    }

    setCoinPair = async () => {
        try {
            const {data} = await getCoinPair(this.firstCoinName, this.secondCoinName);
            this.pairValue = data[this.secondCoinName]
            this.convertCoinPair("first")
        }catch (error) {
            console.log(error)
        }
    }

    setCoinValue = (field:string, value:number) => {
        if (field === 'first'){
            this.firstCoinValue = value;
            this.convertCoinPair("first")
        } else {
            this.secondCoinValue = value;
            this.convertCoinPair('second')
        }
    }

    convertCoinPair = (field:'first'|'second') => {
        if (!this.pairValue) return
        if (field === 'first'){
            this.secondCoinValue = this.firstCoinValue * this.pairValue;
        } else if (field === 'second' && this.secondCoinValue){
            this.firstCoinValue = this.secondCoinValue / this.pairValue;
        }
    }

}


export default new CoinStore();