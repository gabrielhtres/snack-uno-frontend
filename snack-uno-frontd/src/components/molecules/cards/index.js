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
import { bindActionCreators } from 'redux';
import { clickMinhaCesta } from '../../../actions';
import { connect } from 'react-redux';


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

function Cards(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [valueFlavor, setValue] = React.useState('');

console.log(valueFlavor)
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {
    clickMinhaCesta
  } = props;

  const [adicionado, setAdicionado] = React.useState('');

  const adicionaraCesta = (valueFlavor, item) => {
console.log('adicionado', valueFlavor, item)
    //setAdicionado(valueFlavor)
    //clickMinhaCesta({valueFlavor })
  }

  


  return (
    <div className='Cards'>
      <Card className='cards-content' >
        <CardMedia
          component="img"
          height="250"
          image={props.mock.image}
          alt="Paella dish"
          className='cards-imagem'
        />

        <CardActions disableSpacing className='cards-body'>
          <div className='cards-text'>
            <span className='cards-titulo'>{props.mock.name}</span>
            <span className='cards-preco'>R${props.mock.price}</span>
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
              defaultValue={props.mock.flavor[0]}
              value={valueFlavor}
              onChange={handleChange}
            >
              {props.mock.flavor.map((fl, ix) => (
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

          </CardContent> 
          <div >
            <div>
              <Button size="small" variant="contained" color="success" onClick={() => adicionaraCesta(valueFlavor, props.mock)}>
                Comprar
              </Button></div>
            </div>
        </Collapse>
      </Card>
    </div>
  );
}

const mapStateToProps = store => ({
  newValue: store.minhaCestState.newValue
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMinhaCesta }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
