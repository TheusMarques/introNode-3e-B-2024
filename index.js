const express = require('express');
const cors = require('cors');
const router = require('./routes/routes'); 

const app = express ();

app.use(cors());
app.use(express.json());
app.use(router);

//const porta = process.env.PORT || 3333
const porta =4141;

app.get('/',(request,response)=>{
    response.send("bacili is gay")
})

app.listen(porta,() =>{
 
console.log('Servidor iniciando na porta ${porta}');
});

