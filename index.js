const express = require("express");
const { getTodos } = require("./todos");
const todos = require("./todos");

const app = express();
app.use(express.urlencoded({ extended:true}));

app.set("view engine", "ejs");

app.get("/", (req,res)=> {
    const data={
       todos:getTodos(),
    };
    
    res.render("index",data);
});

app.post("/", (req,res) =>{
    console.log(req.body);
    const { newTodo} = req.body;
    todos.addTodo(newTodo);
    res.redirect("/")
});


app.listen(3000,()=>{
    console.log("server strated on port 3000...");
});