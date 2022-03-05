const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Declaramos un objeto, que tendra nombre y apellido
const usuario = {
    nombre: 'nombre',
    apellido: 'apellido',
}

// En este punto, ademas de especificar la vista, pasamos el objeto a nuestra vista
app.get('/', (req, res) => {
    res.render('vistas/bienvenido', {
        usuario: usuario
    })
})


app.listen(3000, () => console.log('server port ', 3000))
