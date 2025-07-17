import { useState } from "react"

export default function EnviarDados() {
  const [nome, setNome] = useState("")
  const [cidade, setCidade] = useState("")
  const [resposta, setResposta] = useState("")
  const [carregando, setCarregando] = useState(false)

  async function enviarFormulario(e) {
    e.preventDefault()
    setCarregando(true)
    setResposta("")

    const dados = { nome, cidade }

    try {
      const res = await fetch("http://localhost:8000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      })

      if (!res.ok) {
        const erroTexto = await res.text()
        throw new Error(`Erro ${res.status}: ${erroTexto}`)
      }

      const json = await res.json()
      setResposta("Dados enviados com sucesso!")
      setNome("")
      setCidade("")
    } catch (error) {
      setResposta(`Erro ao enviar dados: ${error.message}`)
      console.error(error)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
      <h2>Enviar Novo Usuário</h2>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={e => setCidade(e.target.value)}
          required
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
        <button type="submit" disabled={carregando}>
          {carregando ? "Enviando..." : "Enviar"}
        </button>
      </form>
      <p>{resposta}</p>
    </div>
  )
}
