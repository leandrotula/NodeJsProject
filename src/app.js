const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// En este punto, ademas de especificar la vista, pasamos el objeto a nuestra vista
app.get('/', (req, res) => {
    res.render('home')
})


app.listen(3000, () => console.log('server port ', 3000))
