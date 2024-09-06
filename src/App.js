import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Error from "./pages/Error";
import Info from "./pages/Info";
import "./App.css";
import { ItemListContainer } from "./Components/ItemListContainer";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>

                    <Route path="galeria" element={<Galeria />} />
                    <Route path="info" element={<Info />} />
                    <Route path="productos" element={<Productos />} />
                    <Route path="*" element={<Error />} />

                </Route>

            </Routes>
        </BrowserRouter>
    )


}

export default App;