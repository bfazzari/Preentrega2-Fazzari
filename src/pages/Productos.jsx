import { Link } from "react-router-dom";
import productos from "../data.js"


function Productos() {

    return (
        <main>
            <h1>PRODUCTOS</h1>
            <div>
                {productos.map((producto)=>{
                    return(
                        <article>
                            <h4>{producto.title}</h4>
                            <img  src={producto.image}/>
                            <Link>Mas info</Link>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default Productos;