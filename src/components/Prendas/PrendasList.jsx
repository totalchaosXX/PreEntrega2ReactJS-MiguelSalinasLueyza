import { useEffect, useState } from "react"
import PrendasCard from "./PrendasCard"

const PrendasList = () => {

    const [list, setList] = useState([])

    console.log(list)

    // const url = "https://rararopa-f4c58-default-rtdb.firebaseio.com/prenda.json"

    const url = "https://pokeapi.co/api/v2/pokemon"

    useEffect(() => {

        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            setList(data.results)
        })
    },[])

    return (

        <div className="container my-5">

            <h2>Listado de prendas</h2>
            <hr />

            <div className="row">

                {
                    list.map((prenda) => <PrendasCard key={prenda.name} url={prenda.url}/>)
                }

            </div>

        </div>

    )
        
    
}

export default PrendasList