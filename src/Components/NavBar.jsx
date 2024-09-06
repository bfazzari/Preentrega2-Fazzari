import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                                <Link to="/" className="navbar-brand">MEGALODON</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">                      
                        
                        <Link className="nav-item nav-link" to="/info">Información</Link>
                        <Link className="nav-item nav-link" to="/galeria">Galeria</Link>
                        <Link className="nav-item nav-link" to="/productos">Productos</Link>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Promos</a>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
        </nav>
    </>
}