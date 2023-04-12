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
import {getData} from "./api/getData";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import fx from 'money';
import {dark} from "@mui/material/styles/createPalette";



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

  return (
      <Box sx={{ flexGrow: 2 }}>
          <Container maxWidth="lg">
              <Grid container spacing={2}>
                  <Grid item xs={8}>
                      <Item>
                          <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead>
                                      <TableRow>
                                          <TableCell>Dessert (100g serving)</TableCell>
                                          <TableCell align="right">Calories</TableCell>
                                          <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                          <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                      </TableRow>
                                  </TableHead>
                                  <TableBody>
                                      {/*{getData.map((row:any) => (*/}
                                      {/*    <TableRow*/}
                                      {/*        key={row.name}*/}
                                      {/*        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}*/}
                                      {/*    >*/}
                                      {/*        <TableCell component="th" scope="row">*/}
                                      {/*            {row.name}*/}
                                      {/*        </TableCell>*/}
                                      {/*        <TableCell align="right">{row.calories}</TableCell>*/}
                                      {/*        <TableCell align="right">{row.fat}</TableCell>*/}
                                      {/*        <TableCell align="right">{row.carbs}</TableCell>*/}
                                      {/*        <TableCell align="right">{row.protein}</TableCell>*/}
                                      {/*    </TableRow>*/}
                                      {/*))}*/}
                                  </TableBody>
                              </Table>
                          </TableContainer>
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