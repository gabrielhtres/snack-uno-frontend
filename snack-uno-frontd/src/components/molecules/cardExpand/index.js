
import * as React from 'react';
import './index.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8C0400',
      main: '#8C0400',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'white',
    },
  },
});
type Props = {
  mock?: Array,
};
function CardExpand({ mock }: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    console.log(open)
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="CardExpand">
      <div
        className={"container " + (open ? "expand" : "")}
      >
        <div className="upper" onClick={handleClick}>
          <img className="imagem" src={mock.imagem} />
          <div className="text">
            <div className="text4">
              <div className="text2">
                <h3>{mock.nome}</h3>
                <p>/und</p>
              </div>
              <div className="text3"><h3>R${mock.preco}</h3>
              </div>
            </div>
            <KeyboardArrowDownIcon className={"arrow " + (open ? "rotate" : "")} />
          </div>
        </div>
        <div className={"lower " + (!open ? "none" : "")}>
            <RadioGroup
              aria-labelledby="use-radio-group"
              name="use-radio-group"
            >
            {mock.sabores.map((mock) => (
              <FormControlLabel value={mock} control={<Radio size="small"/>} label={mock} />
            ))}
            </RadioGroup>
         <h3>{mock.sabores}</h3>
        </div>
      </div>
    </div>
  );
}

export default CardExpand;