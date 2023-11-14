import schema from './user.model.js'
export async function addTask(req,res){
    const {task}=req.body
    res.status(201).send(schema.create({task}));
}

export async function getTask(req,res){
    let task=await schema.find()
    res.status(200).send(task)
}