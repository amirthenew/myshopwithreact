import axios from "axios"

const fetchProductRequest = ()=>{
    return {
        type : 'FETCH_PRODUCT_REQUEST'
    }
}

const fetchProductSuccess = (products)=>{
    return {
        type : 'FETCH_PRODUCT_SUCCESS',
        payload : products
    }
}

const fetchProductFailure = (error)=>{
    return {
        type : 'FETCH_PRODUCT_FAILURE',
        payload : error
    }
}

export const fetchProduct = ()=>{

    return (dispatch)=>{
        dispatch(fetchProductRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            const products = response.data;
            dispatch(fetchProductSuccess(products))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchProductFailure(errorMsg))
        })


    }

}