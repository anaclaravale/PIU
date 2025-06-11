import { carros } from "./dados_carros";
// Importa os dados dos carros do arquivo dados_carros.js

function ListaModeloCor() {
    return (
      <>
        <h2>Lista Completa de Carros</h2>
        <ul>
          {/* A função map 'varre' todas as informações dos carros e repassa no que foi pedido, usando o id para pegar as informações e 
          repassando o modelo e cor */}
          {carros.map((carro, id) => (
            <li key={id}>
              Modelo: {carro.modelo}, Cor: {carro.cor}
            </li>
          ))}
        </ul>
      </>
    );
  }
  
export default ListaModeloCor;
// Define o que será exportado