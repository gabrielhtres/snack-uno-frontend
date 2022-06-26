import * as React from 'react';
import './App.css';
import Inicial from './components/organisms/inicial/index.js'
import axios from 'axios'



function App() {
  
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

  const [Rest, setRest] = React.useState([]);
  const [Prod, setProd] = React.useState([]);

  const restaurantes = axios.get(`http://52.91.200.181/restaurants`)
  const produtos = axios.get(`http://52.91.200.181/products`)

  Promise.all([restaurantes, produtos]).then(function (values) {
    setRest(values[0].data.message);
    setProd(values[1].data.message);
  });

  return (
    <div className="App">
      <Inicial Restaurantes={Rest} Produtos={Prod} />
    </div>
  );
}

export default App;



/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */