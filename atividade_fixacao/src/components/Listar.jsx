import { useState } from 'react'
import './Listar.css'

export default function Listar() {
  const [tarefa, setTarefa] = useState('')
  const [lista, setLista] = useState([])

  function adicionarTarefa(e) {
    e.preventDefault()
    if (tarefa === '') return
    const nova = {
      id: lista.length + 1,
      texto: tarefa,
      status: 'pendente'
    }
    setLista([...lista, nova])
    setTarefa('')
  }

  function atualizarStatus(id, novoStatus) {
    const novas = lista.map(t =>
      t.id === id ? { ...t, status: novoStatus } : t
    )
    setLista(novas)
  }

  function mover(index, direcao) {
    const nova = [...lista]
    const pos = index + direcao
    if (pos < 0 || pos >= lista.length) return
    const temp = nova[index]
    nova[index] = nova[pos]
    nova[pos] = temp
    setLista(nova)
  }

  function resetar() {
    setLista([])
  }

  return (
    <div className="lista-container">
      <h2>Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={tarefa}
          onChange={e => setTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <button onClick={resetar}>Limpar Tudo</button>
      <ul>
        {lista.map((item, i) => (
          <li key={item.id}>
            <span>{item.texto} — {item.status}</span>
            <div>
              <button onClick={() => atualizarStatus(item.id, 'realizada')}>✅</button>
              <button onClick={() => atualizarStatus(item.id, 'nao realizada')}>❌</button>
              <button onClick={() => atualizarStatus(item.id, 'pendente')}>⏳</button>
              <button onClick={() => mover(i, -1)}>▲</button>
              <button onClick={() => mover(i, +1)}>▼</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
