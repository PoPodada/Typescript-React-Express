import useSWR from "swr";
import { Todo } from "../../../backend/types/index";
export const fetcher = async (path:string) => {
    try{
        const response = await fetch("http://localhost:3001"+path);
        return response.json();
    }catch (err){
        alert(err);
    }
}

export const useTodoList = () => useSWR<Todo[]>("/todo-list",fetcher)