const express = require('express')
const expressLayout = require('express-ejs-layouts')

const app = express()

//EJS
app.unsubscribe(expressLayout)
app.set('view engine', 'ejs')


// Routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`))
