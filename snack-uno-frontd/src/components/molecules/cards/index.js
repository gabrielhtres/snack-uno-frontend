import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.css'

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
  console.log(mock)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='Cards'>
        <Card className='cards-content' >
          <CardMedia
            component="img"
            height="250"
            image={mock.imagem}
            alt="Paella dish"
            className='cards-imagem'
          />

          <CardActions disableSpacing className='cards-body'>
            <div className='cards-text'>
              <span className='cards-titulo'>{mock.nome}</span>
              <span className='cards-preco'>R${mock.preco}</span>
            </div>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: 'white' }}/>
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit className='cards-expanded'>
            <CardContent>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
    </div>
  );
}
export default Cards;