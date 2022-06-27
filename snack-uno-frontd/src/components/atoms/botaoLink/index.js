import './index.css'
import Arrow from '../../../assets/arrow.png'
type Props = {
  children?: String,
  to?: String,
};

function BotaoLink({ children, to }: Props) {
  return (
    <div className="button-voltar">
      <img className="button-voltar-img" src={Arrow} />
      <a href={to} className="botao-link">
        {children}
      </a>
    </div>
  );
}

export default BotaoLink;
