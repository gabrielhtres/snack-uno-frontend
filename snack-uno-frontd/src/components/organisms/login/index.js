import * as React from 'react';
import Navegacao from '../../molecules/navegacao/index.js'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Hamburguer from '../../../assets/hamburguer-v.png'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './index.css'
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  backgroundColor: 'green',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  padding: '7px 107px',
  borderRadius: 78,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#376737',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#376737',
  },
});

function Login() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navegacao />
      <div className="Login">

        <div className="login-imagems">
          <img alt="logo-hamburguer" src={Hamburguer} className="login-imagem" />
        </div>
        <div className="login-container">
          <div className="login-text-linha">
            <div className="login-linha"></div>
            <h1 className="login-text">Login</h1>
            <div className="login-linha"></div>
          </div>
          <div className="login-inputs-group">
            <div className="login-inputs">
              <TextField id="outlined-basic" label="Usuário" variant="outlined" />
            </div>
            <div className="login-inputs">
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div className="login-inputs">
              <BootstrapButton size="large" variant="contained">Entrar</BootstrapButton>
            </div>
            <div className="login-cadastro">
              ou
              <a href="/cadastro">clique aqui para se cadastrar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
