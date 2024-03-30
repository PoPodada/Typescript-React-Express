import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Todo } from "./types"

const app: Express = express();
const port = 3001;

app.use(cors());

const sampleData = [
    { id: 1, title: "learn react", completed: false },
    { id: 2, title: "learn typescript", completed: true },
]
let todoList: Todo[] = sampleData

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});
app.get("/todo-list", (req: Request, res: Response) => {
    res.json(todoList);
});
app.listen(port ,()=>{
    console.log(`listening on port ${port}`)
})