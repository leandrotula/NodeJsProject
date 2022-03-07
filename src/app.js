const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const usuario = {
    nombre: 'nombre',
    apellido: 'apellido',
}

// Accedemos al empezar la aplicacion, al home.ejs
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/bienvenido', (req, res) => {
    res.render('vistas/bienvenido', {
        usuario: usuario
    })
})


app.listen(3000, () => console.log('server port ', 3000))
