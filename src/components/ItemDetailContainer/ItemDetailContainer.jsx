import { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () =>{

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()

    useEffect(()=>{

        setLoading(true)

        pedirDatos()
        .then((res)=>{
            setItem(res.find((prod) => prod.ID === Number(itemId)))
        })
        .catch((error)=>{
            console.log(error)
        }) 
        .finally(()=> setLoading(false))   
    },[itemId])

    return (

        <div className='container -my-5'>
            {
                loading
                ? <h2>Cargando....</h2>
                : <ItemDetail {...item} />
            }
        </div>

    )
}

export default ItemDetailContainer