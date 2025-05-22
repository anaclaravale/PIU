import { useState } from 'react';

export default function Selection() {
    const personagens = [
        {
            id: 1,
            nome: 'Scooby Doo',
            imagem: 'https://aventurasnahistoria.com.br/media/uploads/entretenimento/16616501-696x463.jpg',
            descricao: 'Medroso, comilão e isca de monstro'
        },
        {
            id: 2,
            nome: 'Salsicha',
            imagem: 'https://i.pinimg.com/736x/f9/13/c9/f913c917f4d836b6fc2ffb47dd48e2c3.jpg',
            descricao: 'Medroso, comilão e isca de monstro'
        },
        {
            id: 3,
            nome: 'Velma',
            imagem: 'https://uploads.tenhomaisdiscosqueamigos.com/2022/10/Velma-Scooby-Doo.png',
            descricao: 'Inteligente e perde o óculos'
        },
        {
            id: 4,
            nome: 'Daphne',
            imagem: 'https://i.pinimg.com/736x/d6/45/64/d64564d2665f9cfc6e5f99d6d70b1710.jpg',
            descricao: 'Patricinha que gosta de moda'
        },
        {
            id: 5,
            nome: 'Fred',
            imagem: 'https://i.pinimg.com/736x/b6/d4/d0/b6d4d08508dde03e998b71b66d300358.jpg',
            descricao: 'Faz armadilhas para pegar monstros'
        },
        {
            id: 6,
            nome: 'Máquina de Mistério',
            imagem: 'https://bhaz.com.br/wp-content/uploads/2022/06/van-scooby-doo.jpg',
            descricao: 'Verde-água com flores laranja e carrega crianças intrometidas'
        }
    ];

    const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

    function selecionarPersonagem(personagem) {
        setPersonagemSelecionado(personagem);
    }

    return (
        <div>
            <h1>Selecione um Personagem</h1>
            
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '25px' }}>
                {personagens.map((personagem) => (
                    <div key={personagem.id} style={{ textAlign: 'center' }}>
                        <img
                            src={personagem.imagem}
                            alt={personagem.nome}
                            style={{ width: '200px', cursor: 'pointer' }}
                            onClick={() => selecionarPersonagem(personagem)}
                        />
                        <p>{personagem.nome}</p>
                    </div>
                ))}
            </div>

            {personagemSelecionado && (
                <div style={{ textAlign: 'center' }}>
                    <h2>{personagemSelecionado.nome}</h2>
                    <img
                        src={personagemSelecionado.imagem}
                        alt={personagemSelecionado.nome}
                        style={{ width: '400px', marginBottom: '20px' }}
                    />
                    <p>{personagemSelecionado.descricao}</p>
                </div>
            )}
        </div>
    );
}