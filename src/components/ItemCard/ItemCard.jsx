import { Link } from "react-router-dom"


const ItemCard = ({NOMBRE,DESCRIPCION,PRECIO,ID}) => {

    console.log(NOMBRE);

    return (

        <div className='col-3 m-2'>
                            <h4>{NOMBRE}</h4>
                            {/* <img src={img} /> */}
                            <p>{DESCRIPCION}</p>
                            <p>Precio: ${PRECIO}</p>
                            <Link className="btn btn-primary" to={`/productos/detail/${ID}`}>Ver más</Link>
                        </div>
        
    
    )
}

export default ItemCard