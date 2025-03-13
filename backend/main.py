from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load hospital data
with open("Dummy_payload1.json", "r") as file:
    hospital_data = json.load(file)

@app.get("/hospitals")
def get_hospitals():
    return hospital_data

@app.get("/hospitals/{hospital_id}")
def get_hospital_by_id(hospital_id: int):
    for hospital in hospital_data:
        if hospital["hospital_info"]["ID"] == hospital_id:
            return hospital
    raise HTTPException(status_code=404, detail="Hospital not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
