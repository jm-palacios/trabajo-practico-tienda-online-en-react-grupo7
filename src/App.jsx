import BuscadorFiltros from "./components/BuscadorFiltros";
import { productos } from "./data/productos";
import FormularioCompra from "./components/FormularioCompra";

function App() {
  return (
    <div>
      <h1>Mi tienda online</h1>
      <BuscadorFiltros productos={productos} />
      <hr />
       <FormularioCompra />
    </div>
  );
}

export default App;
