


import * as React from 'react';
import './index.css'
type Props = {
  mock?: Array,
};
function IntemCesta({ mock }: Props) {

  return (

      <div className="item-cesta-container">
      <div className="item-imagens"><img className="item-imagem" src={mock.imagem}/></div>
        <div className="item">
          <span>Comida</span>
          <span>Lugar</span>
        </div>
        <div className="info">
          <span>entrega disponivel</span>
          <span>aberto ate</span>
        </div>
        <div className="resumo">
          <span>sabor: sabor</span>
          <span>quantidade: 1</span>
        </div>
        <div className="preco">
          <span>R$ 5,00</span>
        </div>


    </div>
  );
}

export default IntemCesta;



