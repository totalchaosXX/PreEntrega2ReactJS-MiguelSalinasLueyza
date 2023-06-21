
import { useEffect, useState } from 'react'
import Cards from '../Content/Cards'
import './ItemListContainer.scss'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () =>{

    const [productos, setProductos] = useState([])


    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .catch((error)=>{
            console.log(error)
        })    
    },[])

    return (
        <ItemList items={productos}/>
    )
}

export default ItemListContainer