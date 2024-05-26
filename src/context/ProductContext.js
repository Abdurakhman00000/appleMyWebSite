import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTION } from '../helpers/const';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../FireBase';
// import { type } from '@testing-library/user-event/dist/type';



const productContext = createContext();
export const useProduct = () => useContext(productContext)


const INIT_STATE = {
    data: [],
    oneProduct: {},
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ACTION.GET:
            return {...state, data: action.payload}

            case "GET_ONE": 
            return {...state, oneProduct: action.payload}
    
        default:
            return state;
    }
}


const ProductContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)
    const [newData, setNewData] = useState([]);
    const productColectionRef = collection(db, "data")

    // Add Product
    async function addProduct (newProduct) {
        await addDoc(productColectionRef, newProduct)
    }
    // Add Product


    // Read Product
    async function readProduct () {
        let data = await getDocs(productColectionRef);
        data = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setNewData(data)

        dispatch({
            type: ACTION.GET,
            payload: data,
        })
    }
    // Read Product


    // Delete Product
    async function deleteProduct(id) {
        let productRef = doc(db, "data", id);
        await deleteDoc(productRef, id)
        readProduct()
    }
    // Delete Product


    // Get One Product
    async function getOneProduct(id) {
        let productRef = doc(db, "data", id);
        let data = await getDoc(productRef, id)
        data = {...data.data(), id: data.id}


        dispatch({
            type: "GET_ONE",
            payload: data,
        })
    }
    // Get One Product



    // Edit Product
    async function editProduct(id, editedProduct) {
        let productRef = doc(db, "data", id);
        await updateDoc(productRef, editedProduct);
        readProduct();
    }
    // Edit Product


    // Pagination
    const [page, setPage] = useState(1);
    const itemPerPage = 3;
    const count = Math.ceil(state.data.length / itemPerPage)

    function pagePagination () {
        const start = (page - 1) * itemPerPage;
        const end = start + itemPerPage;
        return state.data.slice(start, end)
    }
    // Pagination



    // Search product
    function searcheProduct(value) {
        let result = state.data.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))

        dispatch({
            type: 'GET',
            payload: result,
        })
    }
    // Search product


    // FILTER PRODUCTS
    function filterMac () {
        let res = newData.filter((el) => el.type === 'mac')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }


    function filterIpad () {
        let res = newData.filter((el) => el.type === 'ipad')

        dispatch({
            type: 'GET',
            payload: res,
        })
    }
    // FILTER PRODUCTS



    const values = {
        addProduct,
        readProduct,
        data: state.data,
        deleteProduct,
        getOneProduct,
        oneProduct: state.oneProduct,
        editProduct,
        setPage,
        count,
        pagePagination,
        searcheProduct,
        filterMac,
        filterIpad,
    }

    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;