import './index.css'
type Props = {
  children?: String,
  widths?: String,
  size?: String,
  esq?: String,
  dir?: String
};
function TituloLinha({ children, widths, size, esq, dir }: Props) {

  return (
    <div className="TituloLinha">
      <div className="titulo-text-linha">
        <div className="titulo-linha-esquerda" style={{border: esq}}></div>
        <h1 className="titulo-text" style={{fontSize: size}}>{children}</h1>
        <div className="titulo-linha" style={{ width: widths, border: dir }}></div>
      </div>
    </div>
  );
}

export default TituloLinha;


