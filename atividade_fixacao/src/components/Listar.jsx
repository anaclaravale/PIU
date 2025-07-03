import { useState } from 'react'
import './Listar.css'

export default function Listar() {
  const [tarefa, setTarefa] = useState('')
  const [categoria, setCategoria] = useState('')
  const [lista, setLista] = useState([])

  function adicionarTarefa(e) {
    e.preventDefault()
    if (tarefa === '' || categoria === '') return
    const nova = {
      id: lista.length + 1,
      texto: tarefa,
      categoria: categoria,
      status: 'pendente'
    }
    setLista([...lista, nova])
    setTarefa('')
    setCategoria('')
  }

  function atualizarStatus(id, novoStatus) {
    const novas = lista.map(t =>
      t.id === id ? { ...t, status: novoStatus } : t
    )
    setLista(novas)
  }

  function excluirTarefa(id) {
    const novaLista = lista.filter(t => t.id !== id)
    setLista(novaLista)
  }

  function moverDentroDaCategoria(id, direcao) {
    const tarefaAlvo = lista.find(t => t.id === id)
    if (!tarefaAlvo) return

    const mesmaCategoria = lista.filter(t => t.categoria === tarefaAlvo.categoria)
    const indexLocal = mesmaCategoria.findIndex(t => t.id === id)
    const novoIndex = indexLocal + direcao

    if (novoIndex < 0 || novoIndex >= mesmaCategoria.length) return

    const novaOrdem = [...mesmaCategoria]
    const temp = novaOrdem[indexLocal]
    novaOrdem[indexLocal] = novaOrdem[novoIndex]
    novaOrdem[novoIndex] = temp

    const outrasCategorias = lista.filter(t => t.categoria !== tarefaAlvo.categoria)
    setLista([...outrasCategorias, ...novaOrdem])
  }

  function resetar() {
    setLista([])
  }

  const categoriasUnicas = [...new Set(lista.map(t => t.categoria))]

  return (
    <div className="lista-container">
      <h2>Lista de Tarefas</h2>

      <form onSubmit={adicionarTarefa}>
        <div>
          <label>Tarefa:</label>
          <input
            type="text"
            value={tarefa}
            onChange={e => setTarefa(e.target.value)}
            placeholder="Digite a tarefa"
          />
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
            placeholder="Ex: casa, estudo, trabalho"
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>

      <button onClick={resetar}>Limpar Tudo</button>

      {categoriasUnicas.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>
          <ul>
            {lista
              .filter(item => item.categoria === cat)
              .map((item, i, arr) => (
                <li key={item.id}>
                  <span>{item.texto} — {item.status}</span>
                  <div>
                    <button onClick={() => atualizarStatus(item.id, 'realizada')}>✅</button>
                    <button onClick={() => atualizarStatus(item.id, 'nao realizada')}>❌</button>
                    <button onClick={() => atualizarStatus(item.id, 'pendente')}>⏳</button>
                    <button onClick={() => moverDentroDaCategoria(item.id, -1)}>▲</button>
                    <button onClick={() => moverDentroDaCategoria(item.id, +1)}>▼</button>
                    <button onClick={() => excluirTarefa(item.id)}>🗑️</button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
