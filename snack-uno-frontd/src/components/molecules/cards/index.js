import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
type Props = {
  mock?: Array,
};
function Cards({ mock }: Props) {
  // console.log('cards', mock)
  const [expanded, setExpanded] = React.useState(false);
  const [value, setValue] = React.useState('');


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='Cards'>
      <Card className='cards-content' >
        <CardMedia
          component="img"
          height="250"
          image={mock.image}
          alt="Paella dish"
          className='cards-imagem'
        />

        <CardActions disableSpacing className='cards-body'>
          <div className='cards-text'>
            <span className='cards-titulo'>{mock.name}</span>
            <span className='cards-preco'>R${mock.price}</span>
          </div>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ color: 'white' }} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit className='cards-expanded'>
          <CardContent>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {mock.flavor.map((fl, ix) => (

                <FormControlLabel
                  value={fl}
                  control={
                    <Radio size="small" sx={{
                      color: blue[50],
                      '&.Mui-checked': {
                        color: blue[800],
                      },
                    }} />}
                  label={fl} />
              ))}
            </RadioGroup>
            <Button variant="contained" color="success">
              Comprar
            </Button>

          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
export default Cards;