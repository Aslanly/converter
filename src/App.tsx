
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./App.css";
import CryptoTable from "./components/cryptoTable/cryptoTable";
import ConverterBlock from "./components/converterBlock/converterBlock";
import Item from "./components/styles/styles";


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
                          <ConverterBlock/>
                      </Item>
                  </Grid>
              </Grid>
          </Container>
      </Box>
  );
}

export default App;