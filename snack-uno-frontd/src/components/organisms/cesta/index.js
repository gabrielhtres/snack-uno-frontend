import * as React from 'react';
import './index.css'
import HamburguerDisabled from '../../../assets/hamburguer-disabled.png'
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import BotaoLink from '../../atoms/botaoLink/index.js'
import ItemCesta from '../../molecules/itemCesta/index.js'
import TituloLinha from '../../atoms/tituloLinha/index.js'
import { bindActionCreators } from 'redux';
import { clickUser } from '../../../actions';
import { connect } from 'react-redux';


type Props = {
  itens?: Array,
};

export function CestaCheia ({itens}: Props) {
  return (
    <div className='Cesta-Cheia'>
      <div className="cesta-body">
        <div className="cesta-tipos-container">
          <div className="cesta-tipos">
            <span>Item</span>
            <span></span>
            <span></span>
            <span></span>
            <span>Resumo</span>
            <span>Preço</span>
          </div>
        </div>
        <div>
          {itens.map((item, index) => (
            <ItemCesta mock={item} />
          ))}
        </div>
        <div className="cesta-total">
          <span>Total: R$ 10,00</span>
        </div>
      </div>
      <div className="cesta-bottom">
        <div className="cesta-botoes">
          <div className="cesta-button-voltar">
            <BotaoLink children="Voltar a tela inicial" to="/" />
          </div>
          <div className="cesta-button-comprar">
            <BotaoLarge children="Comprar" to="minha-cesta/entrega"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CestaVazia () {
  return(
    <div>
    <div className="cesta-disabled-body">
      <div><span>Não tem nada aqui...</span></div>
      <div><img className='cesta-disabled-image' src={HamburguerDisabled}/></div>
      <div><span>Acho que você devia comprar um lanche!</span></div>
      <div className="cesta-bottom">
      <div className="cesta-button-voltar">
            <BotaoLink children="Voltar a tela inicial" to="/" />
          </div>
      </div>
    </div>
    </div>
  )

}

function Cesta(props) {

  let [mock] = React.useState([
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

  ]);

  let [breadcrumb] = React.useState([
    {
      color: 'inherit',
      text: 'Inicial',
      href: '/',
      id: 1,
    },
    {
      color: 'text.primary',
      text: 'Minha cesta',
      href: '/minha-cesta',
      id: 2,
    }
  ]);

  const {
    clickUser
  } = props;
  console.log('props',props)

  const alterarState = () => {
    clickUser('logggg')
  }

  return(
    <div className="Cesta">
      <div className="cesta-header">
        <div className="cesta-breadcrumbs">
          <Breadcrumb breadcrumb={breadcrumb} />
        </div>
        <div className="" onClick={alterarState}><TituloLinha children={'Minha Cesta'} widths="75%" /></div>
      </div>
      <div className="cesta-body">
      <CestaCheia itens={mock}/>
      <CestaVazia />
      </div>
    </div>
  )


}
const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cesta)
