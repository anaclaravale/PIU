import './Listar.css'
import { useState } from 'react'

export default function Listar() {

    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])
    const [idCounter, setIdCounter] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!tarefa.trim()) return
        const novaTarefa = {
            id: idCounter,
            texto: tarefa.trim(),
            status: 'pendente'
        }
        setLista([...lista, novaTarefa])
        setTarefa('')
        setIdCounter(idCounter + 1)
    }

    const handleClear = () => {
        setLista([])
    }

    const atualizarStatus = (id, novoStatus) => {
        setLista(lista.map(t => t.id === id ? { ...t, status: novoStatus } : t))
    }

    const mover = (index, direcao) => {
        const novaLista = [...lista]
        const novoIndex = index + direcao
        if (novoIndex < 0 || novoIndex >= lista.length) return
        const temp = novaLista[index]
        novaLista[index] = novaLista[novoIndex]
        novaLista[novoIndex] = temp
        setLista(novaLista)
    }

    return(
        <div>
            <h2>Lista de Tarefas</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>
                <input type="submit" value="Adicionar"/>
            </form>

            <button onClick={handleClear}>Reset</button>

            <ul>
                {lista.map((item, index) => (
                    <li key={item.id}>
                        <strong>{item.texto}</strong> — <em>{item.status}</em>
                        <div>
                            <button onClick={() => atualizarStatus(item.id, 'realizada')}>✅</button>
                            <button onClick={() => atualizarStatus(item.id, 'não realizada')}>❌</button>
                            <button onClick={() => atualizarStatus(item.id, 'pendente')}>⏳</button>
                            <button onClick={() => mover(index, -1)}>▲</button>
                            <button onClick={() => mover(index, 1)}>▼</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
