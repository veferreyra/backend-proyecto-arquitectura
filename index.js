const express = require('express')
const app = express()

app.get('/ping', (req, res) => res.send('Pong'))
app.get('/gastos/:id', (req, res) => res.send('Estas piedendo el id '+ req.params.id))

app.listen(3000, () => console.log('Servidor escuchando en el puerto 3000!'))