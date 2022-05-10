import * as React from 'react';
import './App.css';
import Navegacao from './components/molecules/navegacao/index.js'
import Cards from './components/molecules/cards/index.js'
import TituloLinha from './components/molecules/tituloLinha/index.js'

function App() {
  let [mock] = React.useState([
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://img.itdg.com.br/tdg/images/blog/uploads/2017/07/shutterstock_413580649.jpg?w=1200',
      id: 1,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: [],
      imagem: 'https://diaonline.ig.com.br/wp-content/uploads/2020/07/comida-caseira-brasilia_capa-1024x683.jpg',
      id: 2,
    },
    {
      nome: 'alguma comida',
      preco: '10,00',
      sabores: ['calabreza', 'queijo', 'frango'],
      imagem: 'https://i.pinimg.com/564x/fa/e3/50/fae3500cc623c6b6051f33ef2dda9205.jpg',
      id: 3,
    },

  ]);
  return (
    <div className="App">
      <Navegacao />

      {mock.map((mock, index) => (
        <Cards mock={mock}/>
      ))}

      <TituloLinha />

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