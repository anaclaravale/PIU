import React from 'react';
import './Card.css';

export default function Card({ nome, imagem }) {
    return (
        <div className="card">
            <img src={imagem} alt={nome} className="card-img" />
            <p className="card-nome">{nome}</p>
        </div>
    );
}
