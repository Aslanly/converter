import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import React, {useEffect} from "react";
import CoinStore from '../store/store';

const ConverterBlock = () => {

    const {coins} = CoinStore;

    useEffect(() => {

    })


    return (
        <div className="wrapper">
            <div className="container">
                <div className="input">
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Валюта"
                        multiline
                        maxRows={4}
                    />
                </div>
                <div className="select">
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
                    >
                        {coins.map((coin) => (
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
                        id="outlined-multiline-flexible"
                        label="Валюта"
                        multiline
                        maxRows={4}
                    />
                </div>
                <div className="select">
                    <TextField
                        id="outlined-select-currency"
                        select
                        defaultValue="EUR"
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

export default ConverterBlock;