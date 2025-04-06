//To add product to cart
export const addCart = (product)=>{
    return{
        type:"addItem",
        payload:product
    }
}

//To delete item from product
export const deleteCart = (product)=>{
    return{
        type:"deleteItem",
        payload:product
    }
}