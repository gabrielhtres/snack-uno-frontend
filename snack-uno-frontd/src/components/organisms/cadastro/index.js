import * as React from 'react';
import TextField from '@mui/material/TextField';
import Hamburguer from '../../../assets/hamburguer-v.png'
import './index.css'
import BotaoLarge from '../../atoms/botaoLarge/index.js'

function Cadastro() {

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

              <TextField id="outlined-basic" placeholder="Informe seu nome" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>CPF</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField id="outlined-basic" placeholder="Apenas Numeros" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>Data de Nascimento</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField id="outlined-basic" placeholder="DD/MM/AAAA" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <span>Telefone</span>
                <p2 className="cadastro-obrigatorio">*</p2>
              </div>

              <TextField id="outlined-basic" placeholder="(DD) 000000000" variant="outlined" />
            </div>
            <div className="cadastro-inputs">
              <div className="cadastro-inputs-text">
                <h2>Guarde as informações abaixo, você vai utilizar para logar aqui posteriormente</h2>
                <span>Email</span>
              </div>

              <TextField id="outlined-basic" placeholder="user@email.com" variant="outlined" />
              <p1 className="text-complemento">Nunca compartilharemos seu e-mail com mais ninguem.</p1>
            </div>
            <div className="cadastro-inputs">
              <span>Senha</span>
              <TextField id="outlined-basic" variant="outlined" />
              <p1 className="text-complemento">Crie sua nova senha</p1>
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