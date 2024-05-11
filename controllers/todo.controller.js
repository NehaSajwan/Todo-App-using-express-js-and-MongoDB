const todoModel = require("../models/todo.model")

const index = async (req, res) => {
    let tdoos = await todoModel.find()
    res.render("index", { tdoos })
}

const store = async (req, res) => {
    await todoModel.create({
        todo: req.body.todo
    })
    res.redirect('/')
}

const update = async (req, res) => {
    await todoModel.updateOne({_id:req.params.id},{
        todo: req.body.todo
    })
    res.redirect('/')
}

const edit= async(req, res)=>{
    let data=await  todoModel.findOne({_id:req.params.id})
    if(!data){
        res.redirect('/')
    }
    return res.render('edit', {data})
     

}

const destroy= async(req, res)=>{
   await todoModel.deleteOne({_id: req.params.id})

   res.redirect('/')
}

module.exports = {
    index,
    store,
    destroy,
    edit,
    update
}