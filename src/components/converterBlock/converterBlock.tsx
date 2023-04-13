import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import {Typography} from "@mui/material";
import React from "react";


const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
const ConverterBlock = () => {
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
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
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
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
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