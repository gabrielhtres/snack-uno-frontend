import './index.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../../../assets/hamburguer.png';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';


import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8C0400',
      main: '#8C0400',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
    secondary: {
      main: '#fafafa',
      light: '#fafafa',
    }
  },
});

function Navegacao() {
  const redire = () => {
    console.log('click')
  };
  return (
    <div className="Navegacao">
      <AppBar theme={theme} position="static" elevation={0}>
        <Toolbar color="secondary">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} className="logo" alt="logo" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SnackUno
          </Typography>
          <div className="navegacao-search">
            <FormControl variant="standard">
              <Input
                theme={theme}
                color="secondary"
                placeholder="Pesquise aqui"
                startAdornment={
                  <InputAdornment onClick={() => redire()} style={{ cursor: 'pointer' }} position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navegacao;