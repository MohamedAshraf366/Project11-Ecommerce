//inital state of cart if it is avaialble
let getInitalStateCart = ()=>{
    let storedCart  =localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) :[]
}

export const handleCart = (state=getInitalStateCart(),action)=>{
    let product = action.payload
    let updateCart;

    //cases of add and delete items
    switch(action.type){
        // case1 to add item to cart
        case 'addItem' :
            //to check if the product found or not
            let existAdd = state.find((m)=>m.id === product.id)
            if(existAdd){
                updateCart = state.map((m)=>
                    m.id === product.id ? {...m, qty:m.qty+1} : m
            )
            }
            else{
                //add new product to cart if item is not found
                ///state >>> all product in cart
                // يأخذ المنتج product الذي أرسله المستخدم لإضافته إلى السلة.
                // يستخدم spread operator (...product) لإنشاء نسخة جديدة من بيانات المنتج.
                // يضيف خاصية qty: 1 إلى المنتج الجديد، لأن هذه أول مرة يتم إضافته للسلة.

                updateCart = [...state,{...product, qty:1}]
            } 
            //update the local storage
            localStorage.setItem('cart', JSON.stringify(updateCart))
            return updateCart

        // /////////////////////////////////////////////////////////////////////////////
        case 'deleteItem' :
            let existDelete = state.find((m)=>m.id === product.id)
            if (existDelete && existDelete.qty === 1) {//إذا لم يتم العثور على المنتج (existDelete = undefined) سيؤدي ذلك إلى خطأ عند محاولة الوصول إلى existDelete.qty
                updateCart = state.filter((m)=>m.id !== existDelete.id) // delete item that match existDelete.id if decrease unless 1
            }
            else{
                updateCart = state.map((m)=>
                    m.id === product.id? {...m, qty:m.qty-1}:m
                )
            }
            localStorage.setItem('cart',JSON.stringify(updateCart))
            return updateCart

            ///////////////////////////////////////////////////////////////////
            default: return state
    }
}