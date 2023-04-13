import React, {useEffect, useState} from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {TCoin} from "../../types/types";
import axios from "axios";


const CryptoTable = () => {

    useEffect(() => {
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD').then(({data}) => {
            console.log(data)
            const coins: TCoin[] = data?.Data?.map((coin:any) =>
                ({
                    name: coin.CoinInfo.Name,
                    fullName: coin.CoinInfo.FullName,
                    imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                    price: parseInt(coin.RAW.USD.PRICE),
                    volume24Hour: parseInt(coin.RAW.USD.VALUME24HOUR),
                })
            )
            setAllCoins(coins);
        })
    }, [])

    const [allCoins, setAllCoins] = useState<TCoin[]>([])

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">FullName</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Volume24hour</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {!allCoins?.length ? 'Загрузка...' : allCoins.map((coin) => (
                    <TableRow
                        key={coin.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <img className='coins' src={coin.imageUrl} alt='logo'/>
                        </TableCell>
                        <TableCell align="right">{coin.name}</TableCell>
                        <TableCell align="right">{coin.fullName}</TableCell>
                        <TableCell align="right">{coin.price}</TableCell>
                        <TableCell align="right">{coin.volume24Hour}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default CryptoTable;