import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from 'reactstrap';


function ItemListContainer() {

    const [products, setProducts] = useState([])

    
    const getProducts = async () => {
        const data = await fetch('../JSON/Datalist.json')
        // Aplico el método JSON

        const responseData = await data.json()
        
        
        setProducts(responseData)
    }
    
    useEffect(() => {
        setTimeout(() => getProducts(), 2000)
    }, [])
    
    return(
        <div className='containerItemListContainer'>
            { products.length === 0 
                ? <Spinner color="light"/>
                : <ItemList products={products}/>
            }
        </div>
    )
}
export default ItemListContainer