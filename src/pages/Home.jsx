import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { Link } from "react-router-dom";


function Home() {

    return (
        <div>
            <NavBar />
            <Outlet />
            <h1>INICIOOOO</h1>
            <footer>
                <div class="container">
                    <p>&copy; 2024 Megalodon Web. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home;