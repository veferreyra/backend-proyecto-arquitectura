

## Instrucciones para ejecución
1. `npm install`
2. `npm start`

## Endpoints

> GET     /gastos

Trea todos los gastos.

> GET     /gastos/:id

Trea un gasto por id

> PUT  /gastos

    {
        fechaDePago: Date,
        importe: number,
        descripcion: string
     }

Crea un gasto

> DELETE /gastos/:id

Borra un gasto
