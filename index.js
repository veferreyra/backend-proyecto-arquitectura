const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());

let db =  [{
    id: 1,
    nombre: "Edenor",
    importe: 804
},
{
    id: 10,
    nombre: "UP",
    importe: 8000
},
{
    id: 2,
    nombre: "AySa",
    importe: 236
}];

obtenerGastoPorId = id => db.filter(gasto => gasto.id == id)[0]
agregarUnGasto = gasto => {
    db = db.concat(gasto)
    return db;
}
borrarUnGastoPorId = id => {
    db = db.filter(gasto => gasto.id != id)
    return db;
}

app.get('/ping', (req, res) => res.send('Pong'))
app.get('/gastos/:id', (req, res) => res.send(obtenerGastoPorId(req.params.id)))
app.get('/gastos', (req, res) => res.send(db))
app.put('/gastos', (req, res) => res.send(agregarUnGasto(req.body)));
app.delete('/gastos/:id', (req, res) => res.send(borrarUnGastoPorId(req.params.id)))

app.listen(8000, () => console.log('Servidor escuchando en el puerto 8000!'))