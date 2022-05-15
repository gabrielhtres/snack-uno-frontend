import * as React from 'react';
import Navegacao from '../../molecules/navegacao/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js'
import ItemCesta from '../../molecules/itemCesta/index.js'

function Cesta() {
  let [mock] = React.useState([
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/c501a702ef05e90d163a1eeeb1633357_XL.jpg',
      id: 1,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: [],
      imagem: 'https://classic.exame.com/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1.jpg?quality=70&strip=info&w=1024',
      id: 2,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://www.sepac.com.br/blog/wp-content/uploads/2019/11/Conhec%CC%A7a-a-equac%CC%A7a%CC%83o-da-pizza-perfeita-criada-por-fi%CC%81sicos-italianos-SEPAC.jpg',
      id: 3,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: [],
      imagem: 'https://www.mundoboaforma.com.br/wp-content/uploads/2019/08/Sandui%CC%81che-de-frango-e-legumes-com-poder-diure%CC%81tico.jpg',
      id: 4,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://receitinhas.com.br/wp-content/uploads/2017/03/Depositphotos_42001073_m-2015-1-848x477.jpg',
      id: 5,
    },

  ]);
  return (
    <div className="Cesta">
      <div className=""><TituloLinha children={'Minha Cesta'} widths="75%" /></div>
      <div>
        {mock.map((mock, index) => (
          <ItemCesta mock={mock} />
        ))}
      </div>

    </div>
  );
}

export default Cesta;
