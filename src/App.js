// import logo from './logo.svg';
import './App.css';
import logo from './logo.svg';
import za1 from './za1.png'
import za2 from './za2.jpg'
import za3 from './za3.jpg'
import za4 from './za4.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="ZapatoStyle Logo" width="55" height="55" />
            </a>
          </div>
          <div className="icons">
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." aria-label="Buscar" />
              <button className="search-button" aria-label="Buscar">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <button aria-label="Notificaciones">
              <i className="fas fa-bell"></i>
            </button>
            <button aria-label="Carrito">
              <i className="fas fa-shopping-cart"></i>
            </button>
            <button aria-label="Sesión">
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
        <nav className="nav">
          <a href="#">Hombre</a>
          <a href="#">Mujer</a>
          <a href="#">Niños</a>
          <a href="#">Ofertas</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Estilo para tus pies</h1>
            <p>Descubre nuestra nueva colección de zapatos para todas las ocasiones.</p>
            <button>Comprar ahora</button>
          </div>
        </section>

        <section className="featured-products">
          <h2>Productos destacados</h2>
          <div className="product-grid">
            <div className="product">
              <img src={za1} alt="Producto 1" />
              <h3>Zapato Casual</h3>
              <p>Negro</p>
              <p>$9.99</p>
            </div>
            <div className="product">
              <img src={za2} alt="Producto 2" />
              <h3>Zapato Deportivo</h3>
              <p>Negro</p>
              <p>$6.99</p>
            </div>
            <div className="product">
              <img src={za3} alt="Producto 3" /> 
              <h3>Botas</h3>
              <p>Negro</p>
              <p>$5.59</p>
            </div>
            <div className="product">
              <img src={za4} alt="Producto 4" />
              <h3>Zapato Formal</h3>
              <p>Negro</p>
              <p>$3.99</p>
            </div>
          </div>
        </section>


        <section className="categories">
          <h2>Categorías</h2>
          <div className="category-grid">
            <div className="category">
              <img src={za2}  alt="Deportivos" />
              <h3>Deportivos</h3>
            </div>
            <div className="category">
              <img src={za1} alt="Casuales" />
              <h3>Casuales</h3>
            </div>
            <div className="category">
              <img src={za4} alt="Formales" />
              <h3>Formales</h3>
            </div>
            <div className="category">
              <img src={za3} alt="Botas" />
              <h3>Botas</h3>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 ZapatoStyle, Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
