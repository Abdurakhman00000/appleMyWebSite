import { Box, Button, Card, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';


const INIT_STATE = {
    name: '',
    price: '',
    description: '',
    type: '',
    image: ''
}

const Form = () => {

    const [inputValues, setInputValues] = useState(INIT_STATE)

    function handleInputSubmit (e) {
        if(e.target.name === 'price') {
            let obj = {...inputValues, [e.target.name]: +e.target.value}
            setInputValues(obj)
        } else {
            let obj = {...inputValues, [e.target.name]: e.target.value}
            setInputValues(obj)
        }
    }

    return (
        <div className="main">
            <div className="block">
            <Box>
                <FormControl>
            <Card sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: '15px',
                width: "400px",
                marginLeft: '360px',
                marginTop: '50px',
            }}>
                <TextField onChange={handleInputSubmit} name='name' placeholder='Name'/>
                <TextField onChange={handleInputSubmit} name='price' placeholder='Price'/>
                <TextField onChange={handleInputSubmit} name='description' placeholder='Description'/>
                <TextField onChange={handleInputSubmit} name='type' placeholder='Type'/>
                <TextField onChange={handleInputSubmit} name='image' placeholder='Image'/>
                <Button variant='contained'>CREATE</Button>
            </Card>
                </FormControl>
        </Box>
            </div>
        </div>
    );
};

export default Form;