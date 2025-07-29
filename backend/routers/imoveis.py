from fastapi import APIRouter

router = APIRouter(prefix="/api/imoveis", tags=["Imoveis"])

@router.get("/")
def listar_imoveis():
    return [{"id": 1, "titulo": "Apartamento", "preco": 250000}]