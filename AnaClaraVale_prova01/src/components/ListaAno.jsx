import { carros } from "./dados_carros"
// Importa os dados dos carros do arquivo dados_carros.js

function ListaAno(){

    const anoMaior = carros.filter(carro => carro.ano > 2019)
    // Filtra os carros com ano superior a 2019

    return(
        <>
            <h2>Lista de Carros com Ano Superior a 2019</h2>
            <ul>
            
            {/* A função map 'varre' as informações passadas de anoMaior e repassa no que foi pedido */}
            {anoMaior.map((carro, id) => (
                <li key={id}>
                    Modelo: {carro.modelo}, Ano: {carro.ano}
                </li> 
                // Usa o id para receber os valores dos carros, juntamente dos valores: modelo e ano
                ))}
            </ul>
        </>
    )
    
}

export default ListaAno
// Define o que será exportado