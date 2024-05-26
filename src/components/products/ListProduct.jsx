import React, { useEffect } from 'react';
import { useProduct } from '../../context/ProductContext';
import { Box } from '@mui/material';
import Cart from '../cart/Cart';
import PaginationProduct from './PaginationProduct';
import Footer from './Footer';
import Back from './Back';
import { useLocation } from 'react-router-dom';

const ListProduct = () => {

    const {readProduct, data, pagePagination, filterMac, filterIpad} = useProduct();

    const location = useLocation()

    useEffect(() => {
        readProduct()
    }, [])


    useEffect(() => {
        if(location.pathname === '/mac') {
            filterMac();
        } else if (location.pathname === '/ipad') {
            filterIpad();
        } else {
            readProduct();
        }
    })

    return (
     <Box>
         <Box>
          <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '130px', marginTop: '-10px'}}>
             <Box  sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '70px 0', gap: '30px'}}>
            {
                data.length > 0 ? (pagePagination().map((el, index) => <Cart key={index} el={el}/>) ) : (<div class="loader">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            )
            }
    </Box>
    <PaginationProduct/>
        </Box>
        <Footer/>
      </Box>
      <Back/>
     </Box>
    )
};

export default ListProduct;