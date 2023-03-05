import React from 'react';



const ProductDetails = (props) => {
    const id = props.match.params.id
    return ( 
        <h2>details of {id}</h2>
     );
}
 
export default ProductDetails;