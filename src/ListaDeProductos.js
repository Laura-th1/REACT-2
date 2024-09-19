import React from 'react';
import Producto from './Productos';

const ListaDeProductos = ({ productos }) => {
    return (
        <div>
            <ul>
                {productos.map((producto, index) => (
                    <li>  <Producto key={index} nombre={producto.nombreproducto} precio={producto.precioproducto} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeProductos;
