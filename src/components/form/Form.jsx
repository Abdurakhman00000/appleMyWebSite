import { Box, Button, Card, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import appleBack from '../image/Tiger-Pixel.jpg'
import { useProduct } from '../../context/ProductContext';
import { Link, useNavigate, useParams } from 'react-router-dom';



const INIT_STATE = {
    name: '',
    price: '',
    description: '',
    type: '',
    image: ''
}

const Form = ({ isEdit }) => {

    const {addProduct, oneProduct, editProduct} = useProduct();

    const [inputValues, setInputValues] = useState(INIT_STATE)

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        if(oneProduct && isEdit) {
            setInputValues(oneProduct)
        }
    }, [oneProduct])

    function handleInputSubmit (e) {
        if(e.target.name === 'price') {
            let obj = {...inputValues, [e.target.name]: +e.target.value}
            setInputValues(obj)
        } else {
            let obj = {...inputValues, [e.target.name]: e.target.value}
            setInputValues(obj)
        }
    }

    function handleInputSave() {
        addProduct(inputValues)
        setInputValues(INIT_STATE)
    }

    function editReq () {
        editProduct(id, inputValues);
    }

    return (
        <div className="main-input-val">
            <div className="block-input-val">
            <Box>
                <FormControl>
            <Card sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: '15px',
                width: "400px",
                marginLeft: '360px',
                marginTop: '100px',
            }}>
                <TextField value={inputValues.name} onChange={handleInputSubmit} name='name' placeholder='Name'/>
                <TextField value={inputValues.price} onChange={handleInputSubmit} name='price' placeholder='Price'/>
                <TextField value={inputValues.description} onChange={handleInputSubmit} name='description' placeholder='Description'/>
                <TextField value={inputValues.type} onChange={handleInputSubmit} name='type' placeholder='Type'/>
                <TextField value={inputValues.image} onChange={handleInputSubmit} name='image' placeholder='Image'/>
                {
                    isEdit ? ( <Link to='/list'><Button   onClick={editReq} sx={{backgroundColor: 'black', color: 'white', '&:hover': {color: 'black', backgroundColor: 'grey'}}}>SAVE</Button></Link> ) : ( <Button onClick={handleInputSave} sx={{backgroundColor: 'black', color: 'white', '&:hover': {color: 'black', backgroundColor: 'grey'}}}>CREATE</Button>)
                }
            </Card>
                </FormControl>
        </Box>
            </div>


            {/* <div className="background-img">
                <img src={appleBack} alt="" />
            </div> */}
        </div>
    );
};

export default Form;