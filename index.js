var express = require('express')
var app = express()
var ws = require('ws')

app.listen(3000, function() {
    console.log("Server started on 3000!")
})

app.use(express.static('public'))

// Definise web socket vezu ka serveru
var wss = new ws.Server({port: 3200})

wss.on('connection', function(socket) {
    console.log("A new client has arrived")

    socket.on('message', function(msg) {
        wss.clients.forEach(function each(client) {
            client.send(msg)
        })
    })
})