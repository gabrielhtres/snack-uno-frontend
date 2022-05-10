
import * as React from 'react';
import './index.css'


import { createTheme } from '@material-ui/core/styles';

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

function TituloLinha() {

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
    <div className="TituloLinha">
      <div
        className={"container " + (open ? "expand" : "")}
        onClick={handleClick}
      >
        <div className="upper">
          <p>June 10</p>
          <h3>
            A family saga with a supernatural twist, set in a German town, where
            the disappearance of two young children exposes
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
            </svg>
          </h3>
        </div>
        <div className="lower">
          <h3>
            werwrds
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TituloLinha;