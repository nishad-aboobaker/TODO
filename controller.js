import schema from './user.model.js'
export async function addTask(req,res){
    const {task}=req.body
    res.status(201).send(schema.create({task}));
}