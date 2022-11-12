const express = require('express')
const server = express()
const routes = require('./routes')

//Usando template engine
server.set('view engine', 'ejs')

//Habilitar arquivos estáticos
server.use(express.static('public'))

//Usar o request body
server.use(express.urlencoded({ extended: true }))

//Usar rotas
server.use(routes)

server.listen(3000, () => console.log('Server is running'))

