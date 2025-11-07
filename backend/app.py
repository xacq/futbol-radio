import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from livekit import api
from dotenv import load_dotenv

load_dotenv(".env.local")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/token")
def get_token():
    token = (
        api.AccessToken(os.getenv("LIVEKIT_API_KEY"), os.getenv("LIVEKIT_API_SECRET"))
        .with_identity("usuario-react")
        .with_name("Fan de Cantor")
        .with_grants(api.VideoGrants(room_join=True, room="futbol_radio"))
        .to_jwt()
    )
    return {"token": token}
