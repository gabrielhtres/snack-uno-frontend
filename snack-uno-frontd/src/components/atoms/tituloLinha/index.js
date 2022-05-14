import './index.css'
type Props = {
  children?: String,
  widths?: String,
};
function TituloLinha({ children, widths }: Props) {

  return (
    <div className="TituloLinha">
      <div className="titulo-text-linha">
        <div className="titulo-linha-esquerda"></div>
        <h1 className="titulo-text">{children}</h1>
        <div className="titulo-linha" style={{ width: widths }}></div>
      </div>
    </div>
  );
}

export default TituloLinha;


