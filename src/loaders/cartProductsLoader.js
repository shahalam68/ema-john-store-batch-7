import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    console.log(products);


        // if cart data is in database, you have to use async await


        const storedCart = getShoppingCart();
        const savedCart = [];

        for(const id in storedCart){
            const addedProducts = products.find(pd => pd.id ===id);
            if(addedProducts){
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }

        // if you need to send two things 

        // return[products,savedCart]

        // another
        // return{products, savedCart}

    return(savedCart)
}
export default cartProductsLoader;