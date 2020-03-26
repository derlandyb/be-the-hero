const express = require('express')

const app = express();

app.get('/', (request, response) => {
    response.json({
        evento: "Semana Omni Stack 11.0",
        aluno: "Derlandy Belchior"
    });
});

app.listen('3333');