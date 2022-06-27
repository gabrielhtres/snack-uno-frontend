import * as React from 'react';
import TextField from '@mui/material/TextField';
import Hamburguer from '../../../assets/hamburguer-v.png'
import './index.css'
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function Cadastro() {
  const validarForm = () => {

  }
  const [error, setError] = React.useState(false);
  const [valida, setValida] = React.useState([
    {
      name: '',
      cpf: 0,
      fone: 0,
      data: '',
      email: '',
      password: '',
    showPassword: false,
    }
  ]);
  const handlePassword = (prop) => (event) => {
    setValida({ ...valida, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValida({
      ...valida,
      showPassword: !valida.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleEmail = (prop) => (event) => {
    setValida({ ...valida, [prop]: event.target.value });
  };

  return (
    <div>
      <div className="Cadastro">
        <div className='cadastro-lateral'>
          <div className="cadastro-container">
            <div className="cadastro-text-linha">
              <div className="cadastro-linha"></div>
              <h1 className="cadastro-text">Cadastro</h1>
              <div className="cadastro-linha"></div>
            </div>
            <div className='cadastro-lateral-imagem'>
              <img alt="logo-hamburguer" src={Hamburguer} className="imagem-lado" />
            </div>

          </div>
        </div>
        <div className='cadastro-body'>
          <div className="cadastro-inputs-group">
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>Nome Completo</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField  error={error}value={valida.name} id="outlined-basic" placeholder="Informe seu nome" variant="outlined" helperText="Revise o nome"/>
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>CPF</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField error={error} type="number" id="outlined-basic" placeholder="Apenas Numeros" variant="outlined" value={valida.cpf} helperText="Informe um CPF válido"/>
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>Data de Nascimento</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField error={error} value={valida.data} type="date" id="outlined-basic" placeholder="DD/MM/AAAA" variant="outlined" helperText="Data incorreta"/>
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>Telefone</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField error={error} value={valida.fone} type="number" id="outlined-basic" placeholder="DD 000000000" variant="outlined" helperText="Informe um número de celular existente"/>
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <h2>Guarde as informações abaixo, você vai utilizar para logar aqui posteriormente</h2>
                <span>Email</span>
              </div>

              <TextField error={error} value={valida.email} type="email" id="outlined-basic" placeholder="user@email.com" variant="outlined"  onChange={handleEmail('email')} helperText="Informe um email válido"/>
              <p1 className="text-complemento">Nunca compartilharemos seu e-mail com mais ninguem.</p1>
            </div>
            <div className="cadastro-inputs">
              <span>Senha</span>
              <FormControl variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={valida.showPassword ? 'text' : 'password'}
                  value={valida.password}
                  onChange={handlePassword('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {valida.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <p1 className="text-complemento">Crie sua nova senha</p1>
            </div>
            <div className="cadastro-inputs">
              <span>Confirme a senha</span>
              <FormControl variant="outlined" helperText="As senhas não coincidem ">
                <OutlinedInput
                  error={error}
                  
                  id="outlined-adornment-password"
                  type={valida.showPassword ? 'text' : 'password'}
                  value={valida.password}
                  onChange={handlePassword('password')}
                  endAdornment={
                    <InputAdornment position="end" >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {valida.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="cadastro-concluir">
              <BotaoLarge children="Concluir" />
            </div>
          </div>
        </div>





      </div>
    </div>
  );
}

export default Cadastro;