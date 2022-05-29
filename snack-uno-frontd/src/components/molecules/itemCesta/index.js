import * as React from 'react';
import './index.css'
import Motorcycle from '../../../assets/Motorcycle.png'
import Clock from '../../../assets/Clock.png'
import Trash from '../../../assets/trash.png'

type Props = {
  mock?: Array,
};
function IntemCesta({ mock }: Props) {

  return (
    <div className="item-cesta">
      <img className="item-cesta-trash" src={Trash}/>
      <div className="item-cesta-container">
        <div className="item-imagens"><img className="item-imagem" src={mock.imagem} /></div>
        <div className="item-info">
          <span className="item-comida">Comida</span>
          <span className="item-cinza">Lugar</span>
        </div>
        <div className="item-info">
          <div className="item-info-imagem">
            <img className="item-info-imagem" src={Motorcycle} />
            <span>Entrega disponivel</span>
          </div>
          <hr className="item-hr"/>
          <div className="item-info-imagem">
            <img className="item-info-imagem" src={Clock} />
            <span className="item-info-imagem-aberto">Aberto ate 22h</span>
          </div>

        </div>
        <div className="item-info item-cinza">
          <span>Sabor: sabor</span>
          <span>Quantidade: 1</span>
        </div>
        <div className="item-preco">
          <span>R$ 5,00</span>
        </div>
      </div>
    </div>
  );
}

export default IntemCesta;



