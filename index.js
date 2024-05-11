//import module
const express= require("express")
const path=require("path")
const hbs= require("hbs")
const bodyParser= require("body-parser")
const mongoose= require("mongoose")

//import files
const Routes= require('./routes/routes.js')

//create app instance
const app= express()

//database connection
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp')
.then(function(response){
    console.log("database connected successfully");
})
.catch(function(err){
    console.log(err);
})


//middleware
app.use(bodyParser.urlencoded({extended:true}))

//PORT
const PORT= process.env.PORT || 8000 

//routes
app.use(Routes)

//view engine configuration
app.set("view engine", 'hbs')
hbs.registerPartials(path.join(__dirname , './views/partials'))

//server start
app.listen(PORT, ()=>{
    console.log(` server is listening on ${PORT}`);
})