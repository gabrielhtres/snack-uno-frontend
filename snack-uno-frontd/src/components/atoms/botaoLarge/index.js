import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
  backgroundColor: 'green',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  padding: '7px 107px',
  borderRadius: 78,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#376737',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#376737',
  },
  '&:disabled': {
    backgroundColor: '#9BAB9D',
  }
});
type Props = {
  children?: String,
  to?: String,
  disabled?: Boolean
};
function BotaoLarge({ children, to, disabled }: Props) {

  return (
    <BootstrapButton href={to} size="large" variant="contained" disabled={disabled}>
      {children}
    </BootstrapButton>
  );
}

export default BotaoLarge;