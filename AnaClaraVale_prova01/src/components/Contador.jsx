import { useState } from "react";
// Importa o hook useState do React para criar estados dentro do componente

function Contador(){
    
    const [contador, setContador] = useState(0);
    // Cria o contador, iniciando com o valor 0.

    const tamanhoMaior = {
        height: 50,
        width: 50,
    };

    const tamanhoMenor = {
        height: 20,
        width: 20,
    };

    const tamanhoNormal = {
        height: 35,
        width: 35,
    };

    const estiloProgressivo = {
    button: contador > 10 ? tamanhoMaior : tamanhoNormal,
    padding: "10px",
    marginRight: "10px",
    };

    const estiloRegressivo = {
    button: contador < 0 ? tamanhoMenor : tamanhoNormal,
    padding: "10px",
    marginRight: "10px",
    };

    // Não consegui a parte de aumentar e diminuir

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <h2>Contador: {contador}</h2>
        
        {/* Atualiza os cliques do contador quando incrementados */}
      <button style={estiloProgressivo} onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>

        {/* Atualiza os cliques do contador quando decrementados */}
      <button style={estiloRegressivo} onClick={() => setContador(contador - 1)}>
        Decrementar
      </button>

    </div>
  );
}
 
export default Contador;