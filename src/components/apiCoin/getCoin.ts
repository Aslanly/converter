import axios from "axios";

 const getCoins = () => {
    return axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
}

export default getCoins;