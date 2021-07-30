import React from 'react'
/**para poder darle utilidad a nuestra URL params 
 * ademas de poder reutilizarlo multiples veses el componente
 * podemos usar el Hook useParams
 *  */

 import { useParams } from 'react-router-dom'
 import {useState, useEffect} from 'react'
 import { Link } from 'react-router-dom';

 export default function Categories(){

    
     const [productsCategory, setProductsCategory] = useState([]);

    const {categoriaByID} = useParams();

    const getCategory = async () => {
        let llamada = fetch("/JSON/DataList.json")
        // let llamada = fetch(`../JSON/DataList.json`);
        llamada = await llamada;
        llamada = await llamada.text();
        const arrayCat = JSON.parse(llamada)
        // console.log(arrayCat)
        const catFilter = arrayCat.filter(productos => productos.categoria === categoriaByID)

        setProductsCategory(catFilter);
    }

    useEffect(() =>{
        getCategory();
    },[categoriaByID])

    return (
        <div className='containerCategory'>
            <h1>CATEGORIA {categoriaByID}</h1>
            {productsCategory.map(element =>{
                
                return (
                   <Link to={`/Detalle/${element.id}`}><p> {element.title}</p>
                   </Link>
                )
            })}
        </div>
    )

 }
