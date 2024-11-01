const fs = require("fs");

const addTodo = (title) =>{
    const todo ={
        id: String(Math.random()),
        title: title,
        completed: false,   
    };
    const filecontent =  fs.readFileSync("todos.json", "utf8");
    const todos =JSON.parse(filecontent);
    todos.push(todo);
    console.log(todos);
    console.log(JSON.stringify(todos));

    try {
        fs.writeFileSync("todos.json", JSON.stringify(todos));
    } catch (error) {
        console.log(error);
    }
    
};


const fetchTodos =()=>{
    const filecontent = fs.readFileSync("todos.json","utf8");
    const todos = JSON.parse(filecontent);
    return todos;
};
module.exports ={
    getTodos: fetchTodos,
    addTodo:addTodo,
};