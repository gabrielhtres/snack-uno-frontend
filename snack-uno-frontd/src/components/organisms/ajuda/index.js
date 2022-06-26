import * as React from 'react';
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import Cards from '../../molecules/cards/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Hamburguer from '../../../assets/hamburguer.png'
import './index.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
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
          <div>Peguntas frequentes</div>
          <div className="ajuda-body-perguntas-list">

              <List dense sx={{ bgcolor: 'background.paper' }}style={{borderRadius: 8}}>
                {list.map((text, index) => (
                  <ListItemButton className="ajuda-body-perguntas-list-item" >

                    <ArrowForwardIosIcon fontSize="small" color="disabled"/>


                    <ListItemText
                      className="ajuda-body-perguntas-list-text"
                      primary={text.pergunta}
                    />
                  </ListItemButton>
                ))}
              </List>

          </div>
          <div className="ajuda-body-perguntas-contato">
            <div>Equipe tecnica</div>
            <div>fone</div>
            <div>email</div>
          </div>
        </div>
        <div className='ajuda-body-hamburguer'>
          <div ><img className="ajuda-body-hamburger-img" src={Hamburguer} /></div>
        </div>
        <div className='ajuda-body-duvida'>
          <div>
            <div>ainda tem duvida</div>
            <div>input</div>
          </div>
          <div>
            <div>email</div>
            <div>input</div>
          </div>
          <div>button</div>
        </div>
      </div>
      <div>
        <div>button</div>
      </div>
    </div>
  );
}

export default Ajuda;



