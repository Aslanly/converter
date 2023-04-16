import React, {useEffect} from 'react';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import {observer} from "mobx-react-lite";
import CoinStore from '../store/store';



const CryptoTable = () => {

    const {coins, setCoin} = CoinStore;


    useEffect(() => {
        setCoin()
    },[])


    return (
        <Table sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">FullName</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Volume24hour</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {coins.map((coin) => (
                    <TableRow
                        key={coin.CoinInfo.Name}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            <img className='coins' src={`https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`} alt='logo'/>
                        </TableCell>
                        <TableCell align="right">{coin.CoinInfo.Name}</TableCell>
                        <TableCell align="right">{coin.CoinInfo.FullName}</TableCell>
                        <TableCell align="right">{coin.RAW.USD.PRICE.toFixed(3)}</TableCell>
                        <TableCell align="right">{coin.RAW.USD.VOLUME24HOUR.toFixed((3))}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default observer(CryptoTable);