import 'bootstrap/dist/css/bootstrap.min.css';
import { CartWidget } from './CartWidget';

export const NavBar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MEGALODON</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Peces</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Alimentos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Peceras</a>
                        </li>
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