from contextlib import asynccontextmanager
import json
from socket import timeout
from fastapi import FastAPI , File, UploadFile , HTTPException , Depends , Request
from fastapi.responses import StreamingResponse
from typing import Annotated
from pydantic import BaseModel
import ollama
import httpx
import io

models = {}
@asynccontextmanager
async def lifespan(app: FastAPI):
    print("--- SERVER STARTING: LOADING MODEL ---")
    app.state.client = httpx.AsyncClient(
        timeout = None
    )
    yield
    print("--- SERVER SHUTTING DOWN: CLEANING UP ---")
    await app.state.client.aclose()
    
app = FastAPI(lifespan=lifespan)

@app.get("/")
async def root(): 
    return {"message": "Welcome to AIMS LLM Model Server"}
  
#kita buat response modelnya

class Query(BaseModel):
    prompt: str 

async def generator(prompt : str , client : httpx.AsyncClient) :
    payload  = {
        "model": "qwen2.5:1.5b",
        "prompt": prompt,
        "stream" : True,
    }
    
    async with client.stream("POST" , "http://localhost:11434/api/generate" , json = payload) as response :
        if response.status_code != 200:
            yield f"Error: Ollama returned {response.status_code}"
            return
        async for line in response.aiter_lines():
            if not line:
                continue
            try:
                chunk = json.loads(line)
                token = chunk.get("response", "")
                
                if token:
                    yield token  
                
                if chunk.get("done"):
                    break
            except json.JSONDecodeError:
                continue
@app.post("/chat")
async def chat(query: Query , request : Request):
    if not query.prompt.strip():
        raise HTTPException(status_code=400, detail="Prompt is empty")
    client = request.app.state.client
    return StreamingResponse(
        generator(query.prompt, client),
        media_type="text/event-stream"
    )
    

    
