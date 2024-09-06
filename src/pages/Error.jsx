import{Link} from "react-router-dom"


function Error (){
return(
    <div>
        <h1>404</h1>
        <p>Web no encontrada</p>
        <Link to="/" >volver</Link>
    </div>
)

}

export default Error;