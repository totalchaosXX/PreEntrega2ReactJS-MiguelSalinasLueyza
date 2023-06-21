

const ItemCard = ({nombre, img, descripcion,precio}) => {

    return (

        <div className='col-3 m-2'>
                            <h4>{nombre}</h4>
                            <img src={img} />
                            <p>{descripcion}</p>
                            <p>Precio: ${precio}</p>
                            <button className="btn btn-primary">Ver más</button>
                        </div>
        

    )
}

export default ItemCard