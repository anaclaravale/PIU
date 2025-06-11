export const carros = [
    {id: 0,
    modelo: 'ford',
    cor: 'vermelho',
    ano: 1998},
    {id: 1,
    modelo: 'renault',
    cor: 'preto',
    ano: 2020},
    {id: 2,
    modelo: 'audi',
    cor: 'azul',
    ano: 2016},
    {id: 3,
    modelo: 'chevrolet',
    cor: 'vermelho',
    ano: 2022},
    {id: 4,
    modelo: 'jeep',
    cor: 'vermelho',
    ano: 2023},
    {id: 5,
    modelo: 'ram',
    cor: 'verde',
    ano: 2015},
    {id: 6,
    modelo: 'fiat',
    cor: 'preto',
    ano: 2018},
    {id: 7,
    modelo: 'byd',
    cor: 'vermelho',
    ano: 2024},

]

// function ListaCarros() {
//   // Lista completa: todos os modelos + ano
//   const listaCompleta = carros.map((carro, index) => (
//     <li key={index}>
//       {carro.modelo} - {carro.ano}
//     </li>
//   ));

//   // Lista só de carros vermelhos
//   const carrosVermelhos = carros
//     .filter((carro) => carro.cor === "vermelho")
//     .map((carro, index) => (
//       <li key={index}>
//         {carro.modelo} - {carro.cor}
//       </li>
//     ));

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Todos os Carros (modelo + ano)</h2>
//       <ul>{listaCompleta}</ul>

//       <h2>Carros Vermelhos</h2>
//       <ul>{carrosVermelhos}</ul>
//     </div>
//   );
// }

// export default ListaCarros;