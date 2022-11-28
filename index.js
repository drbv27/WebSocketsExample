const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado')
    socket.emit('nuevo mensaje', 'Bienvenido')

    socket.on('nuevo mensaje', (mensaje) => {
            io.emit('nuevo mensaje', mensaje)
        }
    )
})




setInterval(() => {
    io.emit('mensaje', 'hola a todos')
}, 3000);

server.listen(8080, () => {
    console.log(' servidor iniciado en puerto 8080')
})