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
import CryptoTable from "./components/cryptoTable/cryptoTable";



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
                        <CryptoTable/>
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