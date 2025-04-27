import todo  from "../models/todo.model.js"

export const getTodos = async(req,res) =>
{
    try{
        const todos = await todo.find();
        res.status(200).json(todos);

    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getTodoById = async(req,res) =>{
    try{
        const todos = await todo.findById(req.params.id);
        if(!todos) return res.status(404).json({message:'Todo not fopud'});
        res.status(200).json(todos);

    }catch(error ){
        res.status(500).json({message:error.message});
    }
}

export const createTodo = async(req,res) =>{
    const todos = new todo(req.body);
    try{
        const saveed = await todos.save();
        res.status(201).json(saveed);
    }catch (error){
        res.status(400).json({mesage:error.message})

    }
}

export const deleteTodo = async(req,res) =>{
    const {id} = req.params.id;
    try{
        const del = await todo.findByIdAndDelete(id);
        if(!del) return res.status(404).json({message:'Todo not found'})
        res.status(200).json({message:'Todo deleted successfully'});
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


export const updateTodo = async(req,res) =>{
   
    try{
        const updatedTodo = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!updatedTodo) return res.status(404).json({message:'Todo not found'})
        res.status(200).json({message:'Todo updated successfully'});
        
    }catch(error){
        res.status(400).json({message:error.message})
    }
}
