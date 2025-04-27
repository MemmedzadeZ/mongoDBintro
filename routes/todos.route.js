import express from "express"
import {createTodo, deleteTodo, getTodoById, getTodos, updateTodo} from "../controllers/todos.controller.js"

const router = express.Router();

router.get('/',getTodos);
router.get('/todo/:id' , getTodoById);
router.post('/add',createTodo);

router.delete('/delete/:id',deleteTodo);
router.put('/edit/:id',updateTodo);