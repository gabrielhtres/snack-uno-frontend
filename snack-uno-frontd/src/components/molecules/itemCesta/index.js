


import * as React from 'react';
import './index.css'
import Motorcycle from '../../../assets/Motorcycle.png'
import Clock from '../../../assets/Clock.png'
type Props = {
  mock?: Array,
};
function IntemCesta({ mock }: Props) {

  return (

      <div className="item-cesta-container">
      <div className="item-imagens"><img className="item-imagem" src={mock.imagem}/></div>
      <div className="item-info">
        <span className="item-comida">Comida</span>
          <span className="item-cinza">Lugar</span>
        </div>
      <div className="item-info">
        <div className="item-info-imagem">
          <img className="item-info-imagem" src={Motorcycle}/>
          <span>entrega disponivel</span>
        </div>
        <div className="item-info-imagem">
          <img className="item-info-imagem" src={Clock} />
          <span>aberto ate 22h</span>
        </div>

        </div>
      <div className="item-info item-cinza">
          <span>sabor: sabor</span>
          <span>quantidade: 1</span>
        </div>
      <div className="item-preco">
          <span>R$ 5,00</span>
        </div>


    </div>
  );
}

export default IntemCesta;



