import { useState } from "react"
import "./ListarTabelas.css"

export default function ListarTabelas() {
  const [names, setNames] = useState([])
  const [usernames, setUsernames] = useState([])
  const [cities, setCities] = useState([])

  const [loadingName, setLoadingName] = useState(false)
  const [loadingUsername, setLoadingUsername] = useState(false)
  const [loadingCity, setLoadingCity] = useState(false)

  function buscarDados(tipo) {
    let setLoading, setDados, extrair

    if (tipo === "name") {
      setLoading = setLoadingName
      setDados = setNames
      extrair = data => data.map(user => user.name)
    } else if (tipo === "username") {
      setLoading = setLoadingUsername
      setDados = setUsernames
      extrair = data => data.map(user => user.username)
    } else if (tipo === "city") {
      setLoading = setLoadingCity
      setDados = setCities
      extrair = data => data.map(user => user.address.city)
    }

    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setDados(extrair(data))
      })
      .catch(err => {
        console.error(`Erro ao buscar ${tipo}:`, err)
        setDados([])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="container">
      <div className="tabela nome">
        <h2>Names</h2>
        <button onClick={() => buscarDados("name")} disabled={loadingName}>
          {loadingName ? "Carregando..." : "Carregar Names"}
        </button>
        <table>
          <thead><tr><th>Name</th></tr></thead>
          <tbody>
            {names.map((name, i) => (
              <tr key={i}><td>{name}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tabela username">
        <h2>Usernames</h2>
        <button onClick={() => buscarDados("username")} disabled={loadingUsername}>
          {loadingUsername ? "Carregando..." : "Carregar Usernames"}
        </button>
        <table>
          <thead><tr><th>Username</th></tr></thead>
          <tbody>
            {usernames.map((username, i) => (
              <tr key={i}><td>{username}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tabela cidade">
        <h2>Cidades</h2>
        <button onClick={() => buscarDados("city")} disabled={loadingCity}>
          {loadingCity ? "Carregando..." : "Carregar Cidades"}
        </button>
        <table>
          <thead><tr><th>Cidade</th></tr></thead>
          <tbody>
            {cities.map((city, i) => (
              <tr key={i}><td>{city}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
