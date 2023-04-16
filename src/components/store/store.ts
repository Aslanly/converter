import {makeAutoObservable, toJS} from 'mobx';
import {TCoin} from "../../types/types";
import getCoin from "../apiCoin/getCoin";

class CoinStore {

    coins:TCoin[] = []
    constructor() {
        makeAutoObservable(this)
    }

    setCoin = async () => {
        try {
            const {data} = await getCoin();
            this.coins = data.Data;
            console.log(toJS(this.coins))

        } catch (error) {
            console.log(error)
        }
    }

}

export default new CoinStore();