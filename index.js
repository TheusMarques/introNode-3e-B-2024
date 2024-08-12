const express = require('express');

const app = express ();

//const porta = process.env.PORT || 3333
const porta =4141;

app.get('/',(request,response)=>{
    response.send("bacili is gay")
})

app.listen(porta,() =>{
 console.log('Servidor Iniciando na Porta' + porta);
// console.log('Servidor iniciando na porta ${porta}');
});

