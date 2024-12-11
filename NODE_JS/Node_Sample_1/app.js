const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>This is Home page</h1>");                              
})

app.get("/cars",(req,res)=>{
res.send("<h1>This is car page</h1>");                                                                                          
})

app.get("/customers",(req,res)=>{
    res.send("<h1>This is customers page</h1>");                                                                                          
}   )

app.listen(8000,()=>{
    console.log("Server is running on http://localhost:8000");          
})