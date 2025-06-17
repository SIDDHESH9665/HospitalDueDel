from typing import List
from fastapi_mail import ConnectionConfig, FastMail
from pydantic import BaseModel, EmailStr


# class EmailSchema(BaseModel):
#     mail: List[EmailStr]
#     body: str

mail_conf = ConnectionConfig(
    MAIL_USERNAME ="manthan.chougule@bajajallianz.co.in",
    MAIL_PASSWORD = "Sennin@098",
    MAIL_FROM = "manthan.chougule@bajajallianz.co.in",
    MAIL_PORT = 587,
    MAIL_SERVER = "smtp.outlook.com",
    MAIL_STARTTLS = True, # False
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

fast_mail = FastMail(mail_conf)

# base api logic
# async def request_via_mail(mail: EmailSchema) -> JSONResponse:
#     """request mail with some query"""
#     html = """
#     <p>Auto generated mail</p> 
#     """
#     message = MessageSchema(
#         subject="Fastapi-Mail module",
#         # recipients=mail.dict().get("mail"),
#         recipients=["Jayesh.Jadhav01@bajajallianz.co.in"],
#         body=html,
#         # body=mail.dict().get("body"),
#         subtype=MessageType.html
#         )

#     try:
#         await fast_mail.send_message(message)
#         return JSONResponse(status_code=200, content={"message": "mail has been sent"})
#     except Exception as e:
#         logging.error(f"Error serving app: {e}")
#         return JSONResponse(
#             status_code=500,
#             content={"message": f"Error serving the application: {str(e)}"}
#         )

import win32com.client as win32

class EmailSchema(BaseModel):
    mail: List[EmailStr]
    body: str

def _mail(mail: EmailSchema):
    """request mail"""
    outlook = win32.Dispatch('outlook.application')
    mail = outlook.CreateItem(0)
    mail.To = ";".join(mail.dict().get("mail"))
    mail.cc = ""

    mail.Subject = "Request"
    mail.Body = """
    Testing mail
    """
    # mail.HTMLBody = '<h2>HTML Message body</h2>' 
    mail.Send()
    
    