import * as React from 'react';
import Navegacao from '../../molecules/navegacao/index.js'
import TextField from '@mui/material/TextField';
import Hamburguer from '../../../assets/hamburguer-v.png'
import './index.css'
import BotaoLarge from '../../atoms/botaoLarge/index.js'

function Cadastro() {

  return (
    <div>
      <Navegacao />
      <div className="Cadastro">

      <div className="cadastro-container">
      <div className="cadastro-text-linha">
            <div className="cadastro-linha"></div>
            <h1 className="cadastro-text">Cadastro</h1>
            <div className="cadastro-linha"></div>
          </div>
      <img alt="logo-hamburguer" src={Hamburguer} className="imagem-lado" />
      </div>
      
      <div className="cadastro-inputs-group">
            <div className="cadastro-inputs">
              <a>Nome Completo</a>
              <p2 className="obrigatorio">*obrigatório</p2>
              <TextField id="outlined-basic" label="Informe seu nome" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <a>CPF</a>
              <p2 className="obrigatorio">*obrigatório</p2>
              <TextField id="outlined-basic" label="Apenas Numeros" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <a>Data de Nascimento</a>
              <p2 className="obrigatorio">*obrigatório</p2>
              <TextField id="outlined-basic" label="DD/MM/AAAA" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <a>Telefone</a>
              <p2 className="obrigatorio">*obrigatório</p2>
              <TextField id="outlined-basic" label="(DD) 000000000" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <h2>Guarde as informações abaixo, você vai utilizar para logar aqui posteriormente</h2>
              <a>Email</a>
              <TextField id="outlined-basic" label="user@email.com" variant="outlined" />
              <p1 className="text-complemento">Nunca compartilharemos seu e-mail com mais ninguem.</p1>
            </div>
            <div className="cadastro-inputs">
              <a>Senha</a>
              <TextField id="outlined-basic" variant="outlined" />
              <p1 className="text-complemento">Crie sua nova senha</p1>
            </div>
            <div className="cadastro-concluir">
              <BotaoLarge children="Concluir"/>
            </div>
          </div>

    </div>
    </div>
  );
}

export default Cadastro;