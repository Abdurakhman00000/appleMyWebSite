import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProduct } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


export default function CartBasket({ oneProduct }) {

  const {  } = useProduct()

  const {addProductToCard, checkProductInCard} = useCart();

  const navigate = useNavigate()

  return (
    <Card sx={{ width: 605, height: '630px', borderRadius: '22px', padding: '30px', marginLeft: '450px', marginTop: '40px', marginBottom: '50px' }}>
          <Typography gutterBottom variant="h5" component="div">
          {oneProduct.name}
        </Typography>

      <CardMedia
        sx={{ height: 440 }}
        image={oneProduct.image}
        title="apple"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {oneProduct.price} $
        </Typography>
      </CardContent>
      <CardActions>
        {
          checkProductInCard(oneProduct.id) ? (
            <>
             <Button onClick={() => navigate('/list')}  sx={{width: '150px', height: '30px', backgroundColor: 'rgb(0, 113, 227)', color: 'white', border: 'none', borderRadius: '14px', '&:hover': {backgroundColor: 'black'}}} size="small">Continue</Button>
             <Button disabled sx={{width: '150px', height: '30px', color: 'white', border: 'none', borderRadius: '14px', '&:hover': {backgroundColor: 'black'}}} size="small">Add to Bag</Button>
            </>
          ) : (
            <Button onClick={() => addProductToCard(oneProduct)} sx={{width: '150px', height: '30px', backgroundColor: 'rgb(0, 113, 227)', color: 'white', border: 'none', borderRadius: '14px', '&:hover': {backgroundColor: 'black'}}} size="small">Add to Bag</Button>
          )
        }
      </CardActions>
      
    </Card>
  );
}

