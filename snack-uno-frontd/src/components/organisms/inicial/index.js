import * as React from 'react';
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import Cards from '../../molecules/cards/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js';
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
  let [mock] = React.useState([
    {
      nome: 'Mini Pizza',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
      id: 1,
    },
    {
      nome: 'Mini Pizza',
      preco: '10,00',
      sabores: [],
      imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
      id: 2,
    },
    {
      nome: 'Mini Pizza',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
      id: 3,
    },
    {
      nome: 'Mini Pizza',
      preco: '10,00',
      sabores: [],
      imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
      id: 4,
    },
    {
      nome: 'Mini Pizza',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
      id: 5,
    },

  ]);
  let [restaurantes] = React.useState([
    {
      nome: 'Hangar',
      lanches: [
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
          id: 5,
        },
      ],
      id: 100,
    },
    {
      nome: 'Da tia',
      lanches: [
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
          id: 5,
        },
      ],
      id: 101,
    },
    {
      nome: 'Dom mate',
      lanches: [
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
          id: 5,
        },
      ],
      id: 102,
    },
    {
      nome: 'Café',
      lanches: [
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
          id: 1,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
          id: 2,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
          id: 3,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: [],
          imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
          id: 4,
        },
        {
          nome: 'Mini Pizza',
          preco: '10,00',
          sabores: ['calabreza', 'queijo', 'frango'],
          imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
          id: 5,
        },
      ],
      id: 103,
    },


  ]);
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
          
          <TituloLinha children='Hangar' dir="none" widths={'80%'} />
          <div className="lista-de-item">
            
              <Cards mock={mock} key={index}/>
            
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Inicial;



