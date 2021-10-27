import React from "react";
const Product= (props) => {
    return (
        <>
    <h1>PRODUCT {props.match.params.id}</h1>  
    <button type="button" className="btn btn-outline-primary"
    onClick={()=> props.history.push('/products')}
    > Go Back</button> 
       
    </>
    )
}
export default Product;