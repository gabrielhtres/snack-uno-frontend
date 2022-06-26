import * as React from 'react';
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import Cards from '../../molecules/cards/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Next from '../../../assets/next.png'
import NextL from '../../../assets/nextL.png'
import NextDisable from '../../../assets/nextdisable.png'
import NextLDisable from '../../../assets/nextLdisabled.png'
import './index.css'
function MinhaConta() {
  let [breadcrumb] = React.useState([
    {
      color: 'text.primary',
      text: 'MinhaConta',
      href: '/',
      id: 1,
    }
  ]);
  return (
    <div className="MinhaConta">
      <div className='minha-conta-header'>
        <div className='minha-conta-titule'>
          <TituloLinha children='MinhaConta' size={'2em'} esq="none" widths={'66%'} />
        </div>
      </div>
      <div className='minha-conta-body'>
      </div>
    </div>
  );
}

export default MinhaConta;



