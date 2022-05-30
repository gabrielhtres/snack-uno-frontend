import * as React from 'react';
import TituloLinha from '../../atoms/tituloLinha/index.js'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './index.css'
import HambuguerLeft from '../../../assets/hamburguer-left.png'
import HambuguerRight from '../../../assets/hamburguer-right.png'
import Arrow from '../../../assets/arrow.png'
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import BotaoLink from '../../atoms/botaoLink/index.js'
import FormControl from '@mui/material/FormControl';
const currencies = [
  {
    value: 'USD',
    label: 'Bloco R',
  },
  {
    value: 'EUR',
    label: 'Bloco R3',
  },
  {
    value: 'BTC',
    label: 'Bloco M',
  },
  {
    value: 'JPY',
    label: 'Bloco K',
  },
];


export default function EntregaPagamento() {
  let [breadcrumb] = React.useState([
    {
      color: 'inherit',
      text: 'Inicial',
      href: '/',
      id: 1,
    },
    {
      color: 'inherit',
      text: 'Minha cesta',
      href: '/minha-cesta',
      id: 2,
    },
    {
      color: 'text.primary',
      text: 'Entrega',
      href: '/minha-cesta/entrega',
      id: 3,
    }
  ]);
  const [currency, setCurrency] = React.useState('');
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChangens = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="entrega-header">
        <div className="entrega-breadcrumbs">
          <Breadcrumb mock={breadcrumb} />
        </div>
        <div className=""><TituloLinha children={'Local de Entrega'} widths="70%" /></div>
      </div>
      <div className="entrega-body">
        <div className="entrega-img-right">
          <img src={HambuguerLeft} alt="ilustração" className="entrega-img" />
        </div>
        <div className="entrega-forms">
          <FormControl sx={{ m: 2, width: 495 }}>
            <div className="entrega-inputs">
              <div className="entrega-input-span"><span>Bloco</span></div>
              <TextField
                id="outlined-select-currency"
                placeholder="Placeholder"
                select
                onChange={handleChange}
                helperText="Ex: Bloco R"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="entrega-inputs">
              <div className="entrega-input-span"><span>Piso/andar</span></div>
              <TextField
                id="outlined-select-currency"
                select
                onChange={handleChange}
                helperText="Ex: 1° andar"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="entrega-inputs">
              <div className="entrega-input-span entrega-reference"><span>Referência</span></div>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                placeholder="Ex: Bancos em frente ao elevador"
                onChange={handleChangens}
              />
            </div>
          </FormControl>
        </div>
        <div className="entrega-img-left">
          <img src={HambuguerRight} alt="ilustração" className="entrega-img" />
        </div>
      </div>
      <div className="entrega-bottom">
        <div className="entrega-botoes">
          <div className="entrega-button-voltar">
            <img className="entrega-button-voltar-img" src={Arrow} />
            <BotaoLink children="Voltar a tela inicial" to="/" />
          </div>
          <div className="entrega-button-comprar">
            <BotaoLarge children="Comprar" />
          </div>
        </div>
      </div>
    </div>

  );
}
