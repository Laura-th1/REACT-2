import React from "react";

//EJERCICIO 1//

import Saludo from "./Saludo";
function App() {
    return (
        <div>
            <h1> Ejercicio 1- Creación de componentes. <br /> </h1>
            <Saludo nombre="Laura!" />
        </div>
    );
};

export default App;


//EJERCICIO 2//

// import Producto from "./Producto";
// function App() {
//   return (
//     <div>
//       <h1>Ejercicio 2- Componente Producto. </h1> < br />
//       <Producto nombreProducto="Gafas" precio="250.000" />
//     </div>
//   );
// };

// export default App;

//EJERCICIO 3//

// import { ContadorFuncional, ContadorClase } from './Componentes';

// function App() {
//   return (
//     <div>
//       <h1>Ejercicio 3- Componentes Funcionales vs. Componentes de Clase. </h1> < br />
//       <ContadorFuncional />
//       <ContadorClase />
//     </div>
//   );
// };
// export default App;

//EJERCICIO 4//

// import ListaDeProductos from './ListaDeProductos';

// const App = () => {
//     const productos = [
//         { nombreproducto: "Zapatos", precioproducto: "480.000" },
//         { nombreproducto: "Jean", precioproducto: "120.000" },
//         { nombreproducto: "Secadora", precioproducto: "500.000" },
//         { nombreproducto: "Plancha", precioproducto: "800.000" },
//         { nombreproducto: "Shampoo", precioproducto: "45.000" },
//         { nombreproducto: "Sandalias", precioproducto: "50.000" },
//         { nombreproducto: "Bolso", precioproducto: "180.000" },
//         { nombreproducto: "Blusa", precioproducto: "50.000" },
//         { nombreproducto: "Aretes", precioproducto: "38.000" },
//         { nombreproducto: "Pulsera", precioproducto: "150.000" },
//     ];
//     return (
//         <div>
//             <h1>Ejercicio 4- Componente ListaDeProductos. </h1> < br />
//             <h2>Lista de Productos</h2>
//             <ListaDeProductos productos={productos} />
//         </div>
//     );
// };

// export default App;

// //EJERCICIO 5//

// import DetalleProducto from './DetalleProducto';

// function App() {
//   const producto =
//     { nombreProducto: "Camara Profesional", precioProducto: "2.000.000", descripcionProducto: "Camara fotografica con excelente calidad de imagen y video." };

//   return (
//     <div>

//       <h1>Ejercicio 5- Componente Detalle Producto  </h1> < br />
//       <DetalleProducto
//         nombre={producto.nombreProducto}
//         precio={producto.precioProducto}
//         descripcion={producto.descripcionProducto}
//       />
//     </div>
//   );
// };
// export default App;
