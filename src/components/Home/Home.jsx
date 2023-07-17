import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="container my-5">
            <h1>Bienvenido a Tienda Ropa Rara</h1>

            <hr />

            <div className="row">

                <div className="col">
                <h3>Catálogo de poleras</h3>
                <br />
                <Link to={"/productos/poleras"} className="btn btn-primary">Ver</Link>

                </div>

                <div className="col">
                <h3>Catálogo de zapatillas</h3>
                <br />
                <Link to={"/productos/zapatillas"} className="btn btn-primary">Ver</Link>

                </div>

            </div>

           
        </div>
    )
}

export default Home