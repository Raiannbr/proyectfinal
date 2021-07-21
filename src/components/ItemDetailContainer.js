import React from 'react'
import Item from './Item'

function ItemDetalContainer(){

    return(    

        <div className='containerItemList'>
            {products.map(product => {
                return(
                    <Item 
                        key={product.id} 
                        id={product.id} 
                        image={product.image} 
                        stock={product.stock} 
                        title={product.title} 
                        description={product.descripcion} 
                        category={product.categoria}
                        price={product.price}
                        // product = {product}
                    />
                )
            })}
        </div>
    )

}

export default ItemDetalContainer