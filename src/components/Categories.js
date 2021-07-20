import React from 'react'
/**para poder darle utilidad a nuestra URL params 
 * ademas de poder reutilizarlo multiples veses el componente
 * podemos usar el Hook useParams
 *  */

 import { useParams } from 'react-router-dom'
 import {useState, useEffect} from 'react'
 import { Link } from 'react-router-dom';

 export default function Categories(props){

    
     const [productsCategory, setProductsCategory] = useState([]);

    const {categoryByID} = useParams();
    //console.log(useParams())

    const getCategory = async () => {
        let llamada = fetch(`JSON/DataList.json/category/${categoryByID}`);
        llamada = await llamada;
        llamada = await llamada.text();
        setProductsCategory(JSON.parse(llamada));
    }

    useEffect(() =>{
        getCategory();
    },[])

    return (
        <div className='containerCategory'>
            <h1>CATEGORIA {categoryByID}</h1>
            {productsCategory.map(element =>{
                
                return (
                   <Link to={`/Detalle/${element.id}`}><p> {element.title}</p>
                   </Link>
                )
            })}
        </div>
    )

 }