from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Usuario(BaseModel):
    nome: str
    cidade: str

usuarios = []

@app.post("/usuarios")
async def criar_usuario(usuario: Usuario):
    usuarios.append(usuario)
    return {"mensagem": "Usuário criado com sucesso!", "usuario": usuario}
