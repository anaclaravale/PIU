import { useState } from 'react'

export default function Listar() {

    const [tarefa, setTarefa] = useState('')
    const [lista, setLista] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLista([...lista, tarefa])
        setTarefa('')
    }

    const handleClear = () => {
        setLista([])
    }

    return(

        <div>

            <h2>Lista de Tarefas</h2>

            <form onSubmit={handleSubmit}>

                <label>
                    <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
                </label>

                <input type="submit" />

            </form>

            <button onClick={handleClear}>Reset</button>

            <ul>
                {lista.map((item) => 
                    <li>{item}</li>
                )}
            </ul>


        </div>

    )
    
}