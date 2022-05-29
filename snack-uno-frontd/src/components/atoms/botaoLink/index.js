import './index.css'

type Props = {
  children?: String,
  to?: String,
};

function BotaoLink({ children, to }: Props) {
  return (
    <a href={to} className="botao-link">
      {children}
    </a>
  );
}

export default BotaoLink;
