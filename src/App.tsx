import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./App.css";
import {Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import {TCoin} from "./types/types";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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


function App () {

    const [allCoins, setAllCoins] = useState<TCoin[]>([])

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

  return (
      <Box sx={{ flexGrow: 2 }}>
          <Container maxWidth="lg">
              <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Item>
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
                                      {allCoins?.map((coin) => (
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
                      </Item>
                  </Grid>
                  <Grid item xs={4}>
                      <Item>
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
                      </Item>
                  </Grid>
              </Grid>
          </Container>
      </Box>
  );
}

export default App;