import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Hamburguer from '../../../assets/hamburguer-v.png'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './index.css'
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { clickButton } from '../../../actions';
import { connect } from 'react-redux';

function Login(props) {


  const [values, setValues] = React.useState({
    password: '',
    email: '',
    showPassword: false,
  });

  const [errorUser, setErrorUser] = React.useState('');
  const [error, setError] = React.useState(false);
  const [errorServer, setErrorServer] = React.useState('');

  const {
    clickButton
  } = props;


  const handlePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleEmail = (prop) => (event) => {
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
  const Acessar = () => {
    const login = axios.post(`http://52.91.200.181/users/login`, {
      email: values.email,
      password: values.password
    })

    Promise.all([login])
      .then((response) => {
        if (response[0].status === 201) {
          clickButton('logado')
          return window.location.href = 'http://localhost:3000/'
        } else {
          setErrorServer(`Estamos com problemas,\n recarregue a página ou volte mais tarde`)
        }
      })
      .catch(error => {
        if(error.response.status === 401) {
          setErrorUser('Usuário e senha incorretos')
          setError(true)
        }
        else {
          setErrorServer('Estamos com problemas, recarregue a página ou volte mais tarde')
        }
        
      });
  }
  return (

    <div className="Login" >
      <div className="login-body">
        <div className="login-container">
          <div className="login-imagems">
            <img alt="logo-hamburguer" src={Hamburguer} className="login-imagem" />
          </div>
          <div className="login-text-linha">
            <div className="login-linha"></div>
            <h1 className="login-text">Login</h1>
            <div className="login-linha"></div>
          </div>
          <div>
            {errorServer ? <span>{errorServer}</span> : ''}
            {errorUser ? <span>{errorUser}</span> : ''}
          </div>
          <div className="login-inputs-group">
            <div className="login-inputs">
              <TextField error={error} id="outlined-basic" label="Usuário" value={values.email} variant="outlined" onChange={handleEmail('email')} />
            </div>
            <div className="login-inputs">
              <FormControl variant="outlined">
                <InputLabel error={error} htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handlePassword('password')}
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
            <div className="login-inputs" onClick={Acessar}>
              <BotaoLarge children="Entrar" />
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



const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
