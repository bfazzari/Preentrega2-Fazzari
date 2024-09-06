import { Link } from "react-router-dom";


function Info() {

    return (
        <div>
            <header class="bg-primary text-white text-center py-5">
            
                <div class="container">
                    <h1>Bienvenido a Megalodón</h1>
                    <p class="lead">Todo lo que necesitas para tus peces y acuarios</p>
                    <Link to="/productos" className="btn btn-light btn-lg">Ver Productos</Link>
                </div>
            </header>


            <section id="productos" class="py-5">
                <div class="container">
                    <h2 class="text-center mb-4">Productos Destacados</h2>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">

                                <div class="card-body">
                                    <h5 class="card-title">Pez Betta</h5>
                                    <p class="card-text">Hermosos colores y aletas llamativas. Perfecto para tu acuario.</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">

                                <div class="card-body">
                                    <h5 class="card-title">Filtro de Acuario</h5>
                                    <p class="card-text">Mantén el agua de tu acuario cristalina y limpia.</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">

                                <div class="card-body">
                                    <h5 class="card-title">Alimento para Peces</h5>
                                    <p class="card-text">La mejor nutrición para tus peces, con ingredientes de calidad.</p>
                                    <a href="#" class="btn btn-primary">Comprar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="bg-light py-5">
                <div class="container">
                    <h2 class="text-center mb-4">¡Ofertas del Mes!</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card bg-warning text-white">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Descuento en Peceras</h3>
                                    <p class="card-text">Compra una pecera y obtén un 20% de descuento en filtros.</p>
                                    <a href="#" class="btn btn-light">Ver Más</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card bg-info text-white">
                                <div class="card-body text-center">
                                    <h3 class="card-title">Alimento 2x1</h3>
                                    <p class="card-text">Lleva dos paquetes de alimento por el precio de uno.</p>
                                    <a href="#" class="btn btn-light">Ver Más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Info;