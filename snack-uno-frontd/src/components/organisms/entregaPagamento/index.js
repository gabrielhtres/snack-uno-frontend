import * as React from 'react';
import TituloLinha from '../../atoms/tituloLinha/index.js'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './index.css'
import HambuguerLeft from '../../../assets/hamburguer-left.png'
import HambuguerRight from '../../../assets/hamburguer-right.png'
import QR from '../../../assets/QR.png'
import hambload from '../../../assets/hambload.gif'
import Breadcrumb from '../../atoms/breadcrumb/index.js'
import BotaoLarge from '../../atoms/botaoLarge/index.js'
import BotaoLink from '../../atoms/botaoLink/index.js'
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  width: '47rem',
  height: '40rem',
  borderRadius: '10px'
};


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
  // modal
  const [open, setOpen] = React.useState(false);
  const [LoadQrcode, setQRCODE] = React.useState(false);
  const [Disabled, setDisabled] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);






    return (
      <div>
        <div className="entrega-header">
          <div className="entrega-breadcrumbs">
            <Breadcrumb breadcrumb={breadcrumb} />
          </div>
          <div className=""><TituloLinha children={'Local de Entrega'} widths="70%" /></div>
        </div>
        <div className="entrega-body">
          <div className="entrega-img-right">
            <img src={HambuguerLeft} alt="ilustração" className="entrega-img" />
          </div>
          <div className="entrega-forms">
            <FormControl className='formss'>
              <div className='entrega-inputs-body'>


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
              <BotaoLink children="Voltar a cesta" to="/minha-cesta" />
            </div>
            <div className="entrega-button-comprar" onClick={handleOpen}>
              <BotaoLarge children="Comprar" />
            </div>
          </div>
        </div>
        <div className="entrega-modal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TituloLinha children={'Pagamento'} size="25px" widths="60%" />
              <div className="entrega-modal-body">
                <span>PIX</span>

                <span>Leia o QR CODE para efetuar o pagamento</span>
                <div className="entrega-modal-img">
                  {LoadQrcode
                    ? <img className="entrega-modal-qrcode" src={QR} />
                    : <img className="entrega-modal-loading" src={hambload} />}
                </div>
                <span>Total: R$ 10,00</span>
                <BotaoLarge children="Finalizar" disabled={Disabled} />
              </div>
            </Box>
          </Modal>
        </div>
      </div>

    );
}
