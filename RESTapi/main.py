import json

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
    "http://localhost:3000",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Dish(BaseModel):
    id: Optional[int] = None
    name: str
    image: str
    desc: str
    steps: str
    cat: str


with open("dishes.json", "r") as f:
    dishes = json.load(f)


@app.post("/adddish", status_code=201)
async def add_dish(dish: Dish):
    d_id = max([d["id"] for d in dishes["dishes"]]) + 1
    new_dieh = {
        "id": d_id,
        "name": dish.name,
        "image": dish.image,
        "desc": dish.desc,
        "steps": dish.steps,
        "cat": dish.cat
    }
    dishes["dishes"].append(new_dieh)
    with open("dishes.json", "w") as f:
        json.dump(dishes, f)


@app.get("/dishes")
async def root():
    return dishes['dishes']


@app.get("/dishes/{d_cat}")
def get_cat(d_cat: str):
    dishes_by_cat = [d for d in dishes["dishes"] if d['cat'] == d_cat]
    return dishes_by_cat if len(dishes_by_cat) > 0 else {}


@app.put("/change_dish", status_code=204)
def change_d(dish: Dish):
    new_dieh = {
        "id": dish.id,
        "name": dish.name,
        "image": dish.image,
        "desc": dish.desc,
        "steps": dish.steps,
        "cat": dish.cat
    }
    dish_list = [d for d in dishes['dishes'] if d["id"] == dish.id]
    if len(dish_list) > 0:
        dishes.remove(dish_list[0])
        dishes.append(new_dieh)
        with open("dishes.json", "w") as f:
            json.dump(dishes, f)
        return dishes
    else:
        return HTTPException(status_code=404, detail=f"dish with the id {dish.id} dosn't exist")


@app.delete("/delete_dish/{d_id}", status_code=204)
def delete_d(d_id: int):
    dish_list = [d for d in dishes if int(d["id"]) == int(d_id)]
    if len(dish_list) > 0:
        dishes.remove(dish_list[0])
        with open("dishes.json", "w") as f:
            json.dump(dishes, f)
        return dishes
    else:
        return HTTPException(status_code=404, detail=f"dish with the id {d_id} dosn't exist")

