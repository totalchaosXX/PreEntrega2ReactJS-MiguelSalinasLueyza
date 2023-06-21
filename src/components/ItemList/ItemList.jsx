import ItemCard from "../ItemCard/ItemCard"


const ItemnList = ({items}) =>{
    return (

        <div className='container my-5'>
            <h1>Listado de productos</h1>

            <hr/>

            {/* {
                productos.length===0
                ? "No hay productos aún"
                : "Ya se cargaron los productos"
            } */}

            <div className='row'>
                {
                    items.map((prenda) => (
                       <ItemCard key={prenda.id} {...prenda}/>
                    ))
                }

            </div>
            

           {/* <Cards titulo="Guitarra Flamenca" descripcion="Guitarra flamenca Abeto" />
           <Cards titulo="Guitarra Clásica" descripcion="Guitarra clásica Cedro" />
           <Cards titulo="Guitarra Eléctrica" descripcion="Guitarra eléctrica Telecaster" /> */}

        </div> 
    )
}

export default ItemnList

 