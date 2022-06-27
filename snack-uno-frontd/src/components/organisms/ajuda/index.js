import * as React from 'react';
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js';
import '@brainhubeu/react-carousel/lib/style.css';
import Hamburguer from '../../../assets/hamburguer-v.png'
import './index.css'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import BotaoLink from '../../atoms/botaoLink/index.js'

function Ajuda() {
  let [breadcrumb] = React.useState([
    {
      color: 'inherit',
      text: 'Inicial',
      href: '/',
      id: 1,
    },
    {
      color: 'text.primary',
      text: 'Ajuda',
      href: '/ajuda',
      id: 2,
    }
  ]);
  let [list] = React.useState([
    {
      pergunta: 'Como finalizar uma compra?',
      id: 1,
    },
    {
      pergunta: 'Como sei qual é minha localização? ',
      id: 2,
    },
    {
      pergunta: 'Meu lanche não chegou, o que eu faço?',
      id: 3,
    },
    {
      pergunta: 'Não sei preencher o cadastro',
      id: 4,
    }
  ]);
  const [values, setValues] = React.useState({
    amount: '',
  })
  const handleChange =
    (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  return (
    <div className="Ajuda">
      <div className='ajuda-header'>
        <div className="ajuda-breadcrumbs">
          <Breadcrumb mock={breadcrumb} />
        </div>
        <div className='ajuda-titule'>
          <TituloLinha children='Ajuda' size={'2em'} widths={'75%'} />
        </div>
      </div>
      <div className='ajuda-body'>
        <div className='ajuda-body-perguntas'>
          <span className='perguntas-title'>Peguntas frequentes</span>
          <div className="ajuda-body-perguntas-list">
            <List dense sx={{ bgcolor: 'background.paper' }} style={{ borderRadius: 8, padding: '15px 10px', margin: '12px 0 20px 0' }}>
              {list.map((text, index) => (
                <ListItemButton className="ajuda-body-perguntas-list-item" >
                  <ArrowForwardIosIcon fontSize="small" color="disabled" />
                  <ListItemText
                    className="ajuda-body-perguntas-list-text"
                    primary={text.pergunta}
                  />
                </ListItemButton>
              ))}
            </List>
          </div>
          <div className="ajuda-body-perguntas-contato">
            <span className='perguntas-contato-title'>Equipe técnica SnackUno</span>
            <span>snakuno@email.com</span>
            <span>(49) 9 9999-9999</span>
          </div>
        </div>
        <div className='ajuda-body-hamburger'>
          <div ><img className="ajuda-body-hamburger-img" src={Hamburguer} /></div>
        </div>
        <div className='ajuda-body-duvida'>
          <div>
            <span className='duvida-text'>Ainda tem dúvida? Deixe sua pergunta</span>
            <div className='ajuda-body-input'>
              <TextField fullWidth
                id="filled-multiline-static"
                multiline
                rows={4}
                placeholder="Onde eu encontro..?"
                variant="outlined"
              />
            </div>

          </div>
          <div>
            <span className='duvida-text'>Insira seu email, para ser notificado quando sua dúvida for respondida!</span>
            <div className='ajuda-body-input'><TextField Multiline rows={2} fullWidth id="outlined-basic"
              placeholder="meuemail@email.com" variant="outlined" /></div>
          </div>
          <div><BotaoLarge children="Enviar dúvida" /></div>
        </div>
      </div>
      <div className='ajuda-bottom-button-voltar'>
        <div className='bottom-button-voltar'><BotaoLink children="Voltar a tela inicial" to="/" /></div>
      </div>
    </div>
  );
}

export default Ajuda;
