import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalla from "../SelectTalla/SelectTalla"
import {  useNavigate } from "react-router-dom"

const tallas = [
    {
        value: "s",
        label: "Small"
    },
    {
        value: "m",
        label: "Medium"
    },
    {
        value: "l",
        label: "Large"
    },
]


const ItemDetail = ({ID,NOMBRE,PRECIO,DESCRIPCION,CATEGORIA}) => {

    const [cantidad,setCantidad] = useState(1)
    const [talla,setTalla] = useState(null)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            ID,NOMBRE,PRECIO,DESCRIPCION,CATEGORIA,STOCK,CANTIDAD,TALLA
        }
    }

    const handlerVolver = () => {
        navigate(-1)
    }

    

    return (
        <div className="container my-5">
            <h2>{NOMNRE}</h2>
            {/* <img src={img} alt={nombre} /> */}
            <p>{DESCRIPCION}</p>
            <h4>{PRECIO}</h4>
            <br />
            <small>Categoria: {CATEGORIA}</small>
            <br />
            <span>seleccione talla: </span>

            <SelectTalla 
                setSelect={setTalla}
                options={tallas}
            />
           
            <ItemCount
                max={STOCK}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
            <hr />
            <button onClick={handlerVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail