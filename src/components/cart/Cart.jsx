import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useProduct } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';


export default function Cart({ el }) {

  const { deleteProduct } = useProduct()

  const navigate = useNavigate()

  return (
    <Card sx={{ width: 395, height: '500px', borderRadius: '22px', padding: '30px' }}>
          <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>

      <CardMedia
        sx={{ height: 260 }}
        image={el.image}
        title="apple"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {el.price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color: 'black'}} onClick={() => deleteProduct(el.id)} size="small"> <RemoveCircleOutlineIcon/> </Button>
        <Button onClick={() => navigate(`/edit/${el.id}`)} sx={{color: 'black'}}> <BorderColorIcon/> </Button>
        <Button  onClick={() => navigate(`/Details/${el.id}`)} sx={{width: '50px', height: '30px', backgroundColor: 'rgb(0, 113, 227)', color: 'white', border: 'none', borderRadius: '14px', '&:hover': {backgroundColor: 'black'}}} size="small">Buy</Button>
      </CardActions>
      
    </Card>
  );
}
