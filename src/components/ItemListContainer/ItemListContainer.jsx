import { useEffect, useState } from "react";
import Cards from "../Content/Cards";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const { categoryId } = useParams();
  const search = searchParams.get("search");

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "Prenda")

    getDocs(productosRef)
    .then((resp) => {
        const items = resp.docs.map((doc) => doc.data())

      
        setProductos(items)
    })
    .catch(e => console.log(e))
    .finally(()=> setLoading(false))


    // pedirDatos()
    // .then((res)=>{

    //     if(!categoryId){
    //         setProductos(res)
    //     }{
    //         setProductos(res.filter((item) => item.categoria === categoryId))
    //     }
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    // .finally(()=> setLoading(false))
  }, [categoryId]);

//   const listado = search
//     ? productos.filter((prod) => prod.nombre.includes(search))
//     : productos;



  return (
    <div className="container -my-5">
      {
         loading
         ? <h2>Cargando....</h2>
         :<ItemList items={productos} />
      }
    </div>
  );
};

export default ItemListContainer;
