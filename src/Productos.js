import React from 'react';

const Producto = ({ nombre, precio }) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
        </div>
    );
};

export default Producto;
