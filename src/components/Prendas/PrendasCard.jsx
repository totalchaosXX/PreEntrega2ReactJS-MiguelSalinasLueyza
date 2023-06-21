import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';

const PrendasCard = ({url})=> {

    const [prenda, setPrenda] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data)=> {
            setPrenda(data)
        })
    ,[]})


    return (
        <div className="col-3 m-2">
            {
                prenda &&


                <div className="card">
                    <img src={prenda.sprites.front_default} alt={prenda.name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{prenda.name}</h5>
                        <hr/>
                        <button className="btn btn-primary">Ver más</button>

                    </div>
                    
                </div>
            }
        </div>
    )
}

export default PrendasCard