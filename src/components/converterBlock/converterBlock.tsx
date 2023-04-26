import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import React, {BaseSyntheticEvent, ChangeEvent, useEffect, useState} from "react";
import CoinStore from '../../store/store';
import {observer} from "mobx-react-lite";

const ConverterBlock = () => {

    const {
        coins,
        secondCoinName,
        firstCoinValue,
        firstCoinName,
        setCoinPairName,
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

    const hendleChangeCoinName = (event:BaseSyntheticEvent, field:string) => {
        const value = event.target.value
        setCoinPairName(field, value)
        setCoinPair()

    }


    useEffect(() => {
        setCoinPair()
    }, [])

    const [click, setClick] = useState()



    return (
        <div className="wrapper">
            <input type="range"/>
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
                        select
                        onChange={(e) => hendleChangeCoinName(e, 'first')}
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
                        id='second'
                        select
                        onChange={(e) => hendleChangeCoinName(e, 'second')}

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