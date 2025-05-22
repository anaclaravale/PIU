import { useState } from 'react';
import './Selection.css';
import Card from './Card';

import daphne from '../assets/daphne.jpg';
import fred from '../assets/fred.jpg';
import salsicha from '../assets/salsicha.jpg';
import scooby from '../assets/scooby_doo.jpg';
import loo from '../assets/scooby_loo.png';
import loo_doido from '../assets/scooby_loo_doido.png';
import maquina from '../assets/maquina_de_misterio.jpg';
import velma from '../assets/velma.webp';

export default function Selection() {
    const personagens = [
        {
            id: 1,
            nome: 'Scooby-Doo',
            imagem: scooby,
            descricao: 'Medroso, comilão e isca de monstro'
        },
        {
            id: 2,
            nome: 'Salsicha',
            imagem: salsicha,
            descricao: 'Medroso, comilão e isca de monstro'
        },
        {
            id: 3,
            nome: 'Velma',
            imagem: velma,
            descricao: 'Inteligente e perde o óculos'
        },
        {
            id: 4,
            nome: 'Daphne',
            imagem: daphne,
            descricao: 'Patricinha que gosta de moda'
        },
        {
            id: 5,
            nome: 'Fred',
            imagem: fred,
            descricao: 'Faz armadilhas para pegar monstros'
        },
        {
            id: 6,
            nome: 'Scooby-Loo',
            imagem: loo,
            descricao: 'Sobrinho do Scooby-Doo'
        },
        {
            id: 7,
            nome: 'Scooby-Loo Doido',
            imagem: loo_doido,
            descricao: 'Scooby-Loo cheio de alma querendo dominar o mundo'
        },
        {
            id: 8,
            nome: 'Máquina de Mistério',
            imagem: maquina,
            descricao: 'Verde-água com flores laranja e carrega crianças enxeridas'
        }
    ];

    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    function selecionarPersonagem(personagem) {
        setPersonagemSelecionado(personagem);
    }

    return (
        <div>
            <h1>Selecione um Personagem</h1>

            <div className="personagem-container">
                {personagens.map((personagem) => (
                    <div key={personagem.id} onClick={() => selecionarPersonagem(personagem)}>
                        <Card nome={personagem.nome} imagem={personagem.imagem} />
                    </div>
                ))}
            </div>

            {personagemSelecionado && (
                <div className="detalhes">
                    <h2>Detalhes do Personagem</h2>
                    <img
                        src={personagemSelecionado.imagem}
                        alt={personagemSelecionado.nome}
                        style={{ width: '400px', marginBottom: '20px' }}
                    />
                    <h4>{personagemSelecionado.nome}</h4>
                    <p>{personagemSelecionado.descricao}</p>
                </div>
            )}
        </div>
    );
}
