import {createServer} from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === 'production' ? false : ['http://localhost:5500', 'http://127.0.0.1:5500']
    }
})

io.on('connection', socket => {
    socket.on('message', data => {
        socket.emit('message', `${data}`)
    })
})