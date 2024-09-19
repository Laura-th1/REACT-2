import React, { useState } from 'react';

function ContadorFuncional() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>Contador funcional: {contador}</p>
            <button onClick={handleClick}>Incrementar</button>
        </div>
    );
}
class ContadorClase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { contador: 0 }
    }
    handleClick = () => {
        this.setState({ contador: this.state.contador + 1 });
    };

    render() {
        return (
            <div>
                <p>Contador de clase: {this.state.contador}</p>
                <button onClick={this.handleClick}>Incrementar</button>
            </div>
        );
    }
}

export { ContadorFuncional, ContadorClase };