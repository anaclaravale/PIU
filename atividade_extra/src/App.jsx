import ListarTabelas from "./components/ListarTabelas"
import EnviarDados from "./components/EnviarDados"

export default function App() {
  return (
    <div>
      <h1>Usuários da API</h1>
      <ListarTabelas />
      <EnviarDados />
    </div>
  )
}
