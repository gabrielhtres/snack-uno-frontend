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
function Inicial() {
  let [breadcrumb] = React.useState([
    {
      color: 'text.primary',
      text: 'Inicial',
      href: '/',
      id: 1,
    }
  ]);
  let [restaurantes] = React.useState([
    {
      nome: 'Hangar',
      lanches: [
        {
          nome: 'Pastel',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Pão de queijo',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/64/f6/a0/64f6a0935448570f2c1a8a8103ff77f8.jpg',
          id: 2,
        },
        {
          nome: 'Enroladinho',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/fc/fe/f8/fcfef82d7dcfe9232ae3f72eb9ad1d35.jpg',
          id: 3,
        },
        {
          nome: 'Pizza salgada',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id: 4,
        },
        {
          nome: 'Pizza doce',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/18/24/36/182436db4d40a75e96df83ce8f924b93.jpg',
          id: 5,
        },
        {
          nome: 'Calzone',
          preco: '10,00',
          quantidade: 4,
          sabores: ['queijo'],
          imagem: 'https://i.pinimg.com/564x/d1/6e/50/d16e50062247b9bb759ff4e1ae2b758c.jpg',
          id: 6,
        },
        {
          nome: 'Misto',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/2b/35/cc/2b35cc3d1d67b3fc137acf3bd191cfd8.jpg',
          id: 7,
        },
        {
          nome: 'Coca-Cola',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id: 8,
        },
        {
          nome: 'Pepsi',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id: 9,
        },
      ],
      id: 100,
    },
    {
      nome: 'Cantina da tia',
      lanches: [
        {
          nome: 'Brigadeiro',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id: 1,
        },
        {
          nome: 'Pastel',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/27/27/a8/2727a8ec51badb73bdac082ccdc6ae3f.jpg',
          id: 2,
        },
        {
          nome: 'Coxinha',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/98/16/d0/9816d0d0e628fd8dc360c842452a4110.jpg',
          id: 3,
        },
        {
          nome: 'Misto',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/2b/35/cc/2b35cc3d1d67b3fc137acf3bd191cfd8.jpg',
          id: 4,
        },
        {
          nome: 'Pão de queijo',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/736x/86/4a/44/864a4437d85876984d32952812231315.jpg',
          id: 5,
        },
        {
          nome: 'Coca-Cola',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id: 6,
        },
        {
          nome: 'Pepsi',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id: 7,
        },
        {
          nome: 'Fatia de pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id: 8,
        },
      ],
      id: 101,
    },
    {
      nome: 'Dom mate',
      lanches: [
        {
          nome: 'Fatia de pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id: 1,
        },
        {
          nome: 'Coca-Cola',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id: 2,
        },
        {
          nome: 'Pepsi',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id: 3,
        },
        {
          nome: 'Sanduiche',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/7a/2b/0d/7a2b0d33ea9a4310ce9dbccb2bd9f9f0.jpg',
          id: 4,
        },
        {
          nome: 'Batata frita',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/f5/18/2b/f5182be9914c40f5714159e10f87fb47.jpg',
          id: 5,
        },
        {
          nome: 'Snickers',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id: 6,
        },
        {
          nome: 'Coxinha',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/98/16/d0/9816d0d0e628fd8dc360c842452a4110.jpg',
          id: 7,
        },
        {
          nome: 'Brigadeiro',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id: 8,
        },
      ],
      id: 102,
    },
    {
      nome: 'Mate.com',
      lanches: [
        {
          nome: 'Calzone',
          preco: '10,00',
          quantidade: 4,
          sabores: ['queijo'],
          imagem: 'https://i.pinimg.com/564x/d1/6e/50/d16e50062247b9bb759ff4e1ae2b758c.jpg',
          id: 1,
        },
        {
          nome: 'Calzone',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza'],
          imagem: 'https://i.pinimg.com/564x/fe/8b/53/fe8b53cdf5aa9787816b80df2e425413.jpg',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Fatia de pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/18/24/36/182436db4d40a75e96df83ce8f924b93.jpg',
          id: 5,
        },
        {
          nome: 'Brigadeiro',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id: 6,
        },
        {
          nome: 'Snickers',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id: 7,
        },
      ],
      id: 103,
    },
    {
      nome: 'Galeria Agostinho Duarte',
      lanches: [
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Snickers',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Sanduiche natural',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Coxinha',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/e2/72/99/e272992bee1540c664291108a11684d0.jpg',
          id: 5,
        },
      ],
      id: 104,
    },
    {
      nome: 'Cantina do Tio',
      lanches: [
        {
          nome: 'Pastel',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Hamburguer',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Sanduiche',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Fanta',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/56/4c/70/564c707f5ef8e421a9aed69cef6d5f22.jpg',
          id: 5,
        },
      ],
      id: 105,
    },
    {
      nome: 'Alecrim',
      lanches: [
        {
          nome: 'Snickers',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id: 1,
        },
        {
          nome: 'Hamburguer',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Sanduiche',
          preco: '10,00',
          quantidade: 4,
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Fatia de pizza',
          preco: '10,00',
          quantidade: 4,
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://i.pinimg.com/564x/18/24/36/182436db4d40a75e96df83ce8f924b93.jpg',
          id: 5,
        },
      ],
      id: 106,
    },
  ]);

  console.log(restaurantes)
  return (
    <div className="Inicial">
      <div className='inicial-header'>
        <div className='inicial-titule'>
          <TituloLinha children='Restaurantes' size={'2em'} esq="none" widths={'66%'} />
        </div>
      </div>
      <div className='inicial-body'>
      {restaurantes.map((mock, index) => (
        <div className='inicial-restaurantes'>
          <TituloLinha children={mock.nome} dir="none" widths={'74%'} />
          <div className="lista-de-item">
            <Carousel
            className="carouselScrool"
              itemWidth={250}
              plugins={[
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 5
                  }
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    numberOfSlides: 5,
                    arrowLeft: <img src={NextL} style={{height: 30, margin:5}}/>,
                    arrowLeftDisabled: <img src={NextLDisable} style={{ height: 30, margin: 5 }} />,
                    arrowRight: <img src={Next} style={{ height: 30, margin: 5 }}/>,
                    arrowRightDisabled: <img src={NextDisable} style={{ height: 30, margin: 5 }} />,
                    addArrowClickHandler: true,
                  }
                },
              ]}
              >
            {mock.lanches.map((lanches, index) => (

              <Cards mock={lanches} key={index}/>
            ))}
            </Carousel>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Inicial;



