import { Link } from "react-router-dom";


function Galeria() {

    return (
        <div>
            <h1>Galeria</h1>
            <Link to="/">Home</Link>

            <section class="gallery">
                <div class="item">
                    <h3>Pez Goldfish</h3>
                    <p>El clásico pez dorado, ideal para principiantes.</p>
                    <div class="price">$10.99</div>
                    <button class="buy-button">Comprar</button>
                </div>

                <div class="item">
                    <h3>Pez Betta</h3>
                    <p>Hermosos colores y aletas exuberantes.</p>
                    <div class="price">$15.99</div>
                    <button class="buy-button">Comprar</button>
                </div>

                <div class="item">
                    <h3>Pez Guppy</h3>
                    <p>Coloridos y fáciles de cuidar.</p>
                    <div class="price">$8.99</div>
                    <button class="buy-button">Comprar</button>
                </div>

                <div class="item">
                    <h3>Pez Disco</h3>
                    <p>Exótico y de gran belleza en acuarios.</p>
                    <div class="price">$25.99</div>
                    <button class="buy-button">Comprar</button>
                </div>
            </section>
        </div>
    )
}

export default Galeria;