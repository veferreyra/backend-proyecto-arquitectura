## Endpoints

> GET     /gastos

Trea todos los gastos.

> GET     /gastos/:id

Trea un gasto por id

> POST  /gastos

    {
        fechaDePago: Date,
        importe: number,
        descripcion: string
     }

Crea un gasto

> DELET /gastos/:id

Borra un gasto
