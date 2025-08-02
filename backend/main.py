# backend/main.py

from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import EmailStr
from aiosmtplib import SMTP
from email.message import EmailMessage
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-email")
async def send_email(
    nome: str = Form(...),
    email: EmailStr = Form(...),
    mensagem: str = Form(...)
):
    remetente = os.getenv("EMAIL_USERNAME")
    destino_waleska = os.getenv("EMAIL_RECEIVER")

    corpo_msg = f"""
    Nome: {nome}
    Email: {email}
    Mensagem:
    {mensagem}
    """

    # Email para Waleska
    msg_waleska = EmailMessage()
    msg_waleska["Subject"] = f"Novo contato de {nome} via site"
    msg_waleska["From"] = remetente
    msg_waleska["To"] = destino_waleska
    msg_waleska.set_content(corpo_msg)

    # Email de confirmação para visitante
    msg_cliente = EmailMessage()
    msg_cliente["Subject"] = "Confirmação de envio - Waleska Imóveis"
    msg_cliente["From"] = remetente
    msg_cliente["To"] = email
    msg_cliente.set_content(
        f"Olá {nome},\n\nRecebemos sua mensagem e entraremos em contato em breve.\n\nCópia da sua mensagem:\n{corpo_msg}\n\nAtenciosamente,\nEquipe Waleska Imóveis"
    )

    smtp = SMTP(
        hostname=os.getenv("EMAIL_HOST"),
        port=int(os.getenv("EMAIL_PORT")),
        start_tls=True
    )
    await smtp.connect()
    await smtp.login(remetente, os.getenv("EMAIL_PASSWORD"))
    await smtp.send_message(msg_waleska)
    await smtp.send_message(msg_cliente)
    await smtp.quit()

    return {"success": True, "message": "Mensagem enviada com sucesso!"}
