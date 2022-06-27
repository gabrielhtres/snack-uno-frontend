import * as React from 'react';
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import Cards from '../../molecules/cards/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js';
import Carousel, { slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import hambload from '../../../assets/hambload.gif'
import Next from '../../../assets/next.png'
import NextL from '../../../assets/nextL.png'
import NextDisable from '../../../assets/nextdisable.png'
import NextLDisable from '../../../assets/nextLdisabled.png'
import './index.css'
type Props = {
  Restaurantes?: Array,
  Produtos?: Array,
};
function Inicial({ Restaurantes, Produtos }: Props) {
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
      name: 'Hangar',
      id_restaurant: 1,
      lanches: [
        {
          name: 'Pastel',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id_product: 1,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Pão de queijo',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/64/f6/a0/64f6a0935448570f2c1a8a8103ff77f8.jpg',
          id_product: 2,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Enroladinho',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/fc/fe/f8/fcfef82d7dcfe9232ae3f72eb9ad1d35.jpg',
          id_product: 3,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Pizza salgada',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id_product: 4,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Pizza doce',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/18/24/36/182436db4d40a75e96df83ce8f924b93.jpg',
          id_product: 5,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Calzone',
          price: '10,00',
          stock: 4,
          flavor: ['queijo'],
          image: 'https://i.pinimg.com/564x/d1/6e/50/d16e50062247b9bb759ff4e1ae2b758c.jpg',
          id_product: 6,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Misto',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/2b/35/cc/2b35cc3d1d67b3fc137acf3bd191cfd8.jpg',
          id_product: 7,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Coca-Cola',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id_product: 8,
          id_restaurant: 1,
          description: 'Pastel',
        },
        {
          name: 'Pepsi',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id_product: 9,
          id_restaurant: 1,
          description: 'Pastel',
        },
      ],
      id: 100,
    },
    {
      name: 'Cantina da tia',
      id_restaurant: 2,
      lanches: [
        {
          name: 'Brigadeiro',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id_product: 1,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Pastel',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/27/27/a8/2727a8ec51badb73bdac082ccdc6ae3f.jpg',
          id_product: 2,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Coxinha',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/98/16/d0/9816d0d0e628fd8dc360c842452a4110.jpg',
          id_product: 3,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Misto',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/2b/35/cc/2b35cc3d1d67b3fc137acf3bd191cfd8.jpg',
          id_product: 4,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Pão de queijo',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/736x/86/4a/44/864a4437d85876984d32952812231315.jpg',
          id_product: 5,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Coca-Cola',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id_product: 6,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Pepsi',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id_product: 7,
          id_restaurant: 2,
          description: 'Pastel',
        },
        {
          name: 'Fatia de pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id_product: 8,
          id_restaurant: 2,
          description: 'Pastel',
        },
      ],
      id: 101,
    },
    {
      name: 'Dom mate',
      id_restaurant: 3,
      lanches: [
        {
          name: 'Fatia de pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/c4/14/65/c41465eb553410cc7180764a2d8ecd23.jpg',
          id_product: 1,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Coca-Cola',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/37/3f/ac/373facf57478ae5f9fb1e00ac4723f5d.jpg',
          id_product: 2,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Pepsi',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/db/57/fd/db57fd384977cc49524d0ba04f1833b7.jpg',
          id_product: 3,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Sanduiche',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/7a/2b/0d/7a2b0d33ea9a4310ce9dbccb2bd9f9f0.jpg',
          id_product: 4,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Batata frita',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/f5/18/2b/f5182be9914c40f5714159e10f87fb47.jpg',
          id_product: 5,
          
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Snickers',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id_product: 6,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Coxinha',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/98/16/d0/9816d0d0e628fd8dc360c842452a4110.jpg',
          id_product: 7,
          id_restaurant: 3,
          description: 'Pizza',
        },
        {
          name: 'Brigadeiro',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id_product: 8,
          id_restaurant: 3,
          description: 'Pizza',
        },
      ],
      id: 102,
    },
    {
      name: 'Mate.com',
      id_restaurant: 4,
      lanches: [
        {
          name: 'Calzone',
          price: '10,00',
          stock: 4,
          flavor: ['queijo'],
          image: 'https://i.pinimg.com/564x/d1/6e/50/d16e50062247b9bb759ff4e1ae2b758c.jpg',
          id_product: 1,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Calzone',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza'],
          image: 'https://i.pinimg.com/564x/fe/8b/53/fe8b53cdf5aa9787816b80df2e425413.jpg',
          id_product: 2,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id_product: 3,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id_product: 4,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Fatia de pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://receitassemsegredos.com.br/wp-content/uploads/2022/03/2.webp',
          id_product: 5,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Brigadeiro',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/62/44/53/62445359e21d4fde27fde4bbce67ec7e.jpg',
          id_product: 6,
          id_restaurant: 4,
          description: 'Calzone',
        },
        {
          name: 'Snickers',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id_product: 7,
          id_restaurant: 4,
          description: 'Calzone',
        },
      ],
      id: 103,
    },
    {
      name: 'Galeria Agostinho Duarte',
      id_restaurant: 7,
      lanches: [
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id_product: 1,
          id_restaurant: 7,
          description: 'Snickers',
        },
        {
          name: 'Snickers',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id_product: 2,
          id_restaurant: 7,
          description: 'Snickers',
        },
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id_product: 3,
          id_restaurant: 7,
          description: 'Snickers',
        },
        {
          name: 'Sanduiche natural',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id_product: 4,
          id_restaurant: 7,
          description: 'Snickers',
        },
        {
          name: 'Coxinha',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/e2/72/99/e272992bee1540c664291108a11684d0.jpg',
          id_product: 5,
          id_restaurant: 7,
          description: 'Snickers',
        },
      ],
      id: 104,
    },
    {
      name: 'Cantina do Tio',
      id_restaurant: 5,
      lanches: [
        {
          name: 'Pastel',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id_product: 1,
          id_restaurant: 5,
          description: 'Pastel',
        },
        {
          name: 'Hamburguer',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id_product: 2,
          id_restaurant: 5,
          description: 'Pastel'
        },
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id_product: 3,
          id_restaurant: 5,
          description: 'Pastel'
        },
        {
          name: 'Sanduiche',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id_product: 4,
          id_restaurant: 5,
          description: 'Pastel'
        },
        {
          name: 'Fanta',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/56/4c/70/564c707f5ef8e421a9aed69cef6d5f22.jpg',
          id_product: 5,
          id_restaurant: 5,
          description: 'Pastel'
        },
      ],
      id: 105,
    },
    {
      name: 'Alecrim',
      id_restaurant: 6,
      lanches: [
        {
          name: 'Snickers',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/5c/bb/96/5cbb966c2a845f6fe4fa5f785558c101.jpg',
          id_product: 1,
          id_restaurant: 6,
          description: 'Snickers'
        },
        {
          name: 'Hamburguer',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id_product: 2,
          id_restaurant: 6,
          description: 'Snickers'
        },
        {
          name: 'Mini Pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id_product: 3,
          id_restaurant: 6,
          description: 'Snickers'
        },
        {
          name: 'Sanduiche',
          price: '10,00',
          stock: 4,
          flavor: [],
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id_product: 4,
          id_restaurant: 6,
          description: 'Snickers'
        },
        {
          name: 'Fatia de pizza',
          price: '10,00',
          stock: 4,
          flavor: ['calabreza', 'queijo', 'frango'],
          image: 'https://i.pinimg.com/564x/18/24/36/182436db4d40a75e96df83ce8f924b93.jpg',
          id_product: 5,
          id_restaurant: 6,
          description: 'Snickers'
        },
      ],
      id: 106,
    },
  ]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    //if(Produtos.length !== 0) setLoading(false);
    setTimeout(() => {setLoading(false)}, 1000);
  });

  return (
    <div className="Inicial">
      <div></div>
      <div className='inicial-header'>
        <div className='inicial-titule'>
          <TituloLinha children='Restaurantes' size={'2em'} esq="none" widths={'66%'} />
        </div>
      </div>
      {loading
        ? <div className='inicial-loading'><img className="inicial-loading-hamburguer" src={hambload} />
        <span> Estamos trazendo as informações</span></div>

        :
        <div className='inicial-body'>
          {/** do backend {Restaurantes.map((restaurante, index) => (*/}
            {restaurantes.map((restaurante, index) => (
            <div className='inicial-restaurantes'>
              <TituloLinha children={restaurante.name} dir="none" widths={'74%'} />


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
                        arrowLeft: <img src={NextL} style={{ height: 30, margin: 5 }} />,
                        arrowLeftDisabled: <img src={NextLDisable} style={{ height: 30, margin: 5 }} />,
                        arrowRight: <img src={Next} style={{ height: 30, margin: 5 }} />,
                        arrowRightDisabled: <img src={NextDisable} style={{ height: 30, margin: 5 }} />,
                        addArrowClickHandler: true,
                      }
                    },
                  ]}
                >
                    {/** do backend {Produtos.map((lanches, ix) => ( */}
                    {restaurante.lanches.map((lanches, ix) => (
                    lanches.id_restaurant === restaurante.id_restaurant ?
                      <div>
                        <Cards mock={lanches} key={ix} />
                      </div>
                      : ''
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default Inicial;



