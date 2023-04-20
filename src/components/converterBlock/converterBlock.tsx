import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import React, {ChangeEvent, useEffect} from "react";
import CoinStore from '../../store/store';
import {observer} from "mobx-react-lite";

const ConverterBlock = () => {

    const {
        coins,
        setCoin,
        secondCoinName,
        convertCoinPair,
        firstCoinValue,
        pairValue,
        firstCoinName,
        setCoinPair,
        secondCoinValue,
        setCoinValue,
    } = CoinStore;

    const handleChangeCoinValue = (event:ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id
        const value = +event.target.value
        if(field !== 'first' && field !== 'second' || Number.isNaN(value)) return
        setCoinValue(field, value)
    }

    useEffect(() => {
        setCoinPair()
    }, [])


    return (
        <div className="wrapper">
            <div className="container">
                <div className="input">
                    <TextField
                        id='first'
                        onChange={handleChangeCoinValue}
                        value={firstCoinValue}
                        label={firstCoinName}
                    />
                </div>
                <div className="select">
                    <TextField
                        value={firstCoinName}
                        id="outlined-select-currency"
                        select
                    >
                        {coins?.map((coin) => (
                            <MenuItem key={coin.CoinInfo.Name} value={coin.CoinInfo.Name}>
                                {coin.CoinInfo.Name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <div className="container">
                <div className="input">
                    <TextField
                        id='second'
                        onChange={handleChangeCoinValue}
                        value={secondCoinValue}
                        label={secondCoinName}
                    />
                </div>
                <div className="select">
                    <TextField
                        value={secondCoinName}
                        id="outlined-select-currency"
                        select
                    >
                        {coins.map((coin) => (
                            <MenuItem key={coin.CoinInfo.Name} value={coin.CoinInfo.Name}>
                                {coin.CoinInfo.Name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <div className="text">
                <Typography variant="h3" component="h3">
                    h1. Heading
                </Typography>;
            </div>
        </div>
    )
}

export default observer(ConverterBlock);