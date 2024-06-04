/* eslint-disable */
const express = require('express')
const kodersRouter = require('./routes/koders.router') 
const mentorsRouter = require('./routes/mentors.router')
const app = express()


//middleware - tratamiento de request 
app.use(express.json())

//despues montamos nuestro servidor
app.use('/koders', kodersRouter)
// app.use('/mentors', mentorsRouter)

app.get('/', (request, response) => {
    response.json({
        message: 'Api koders v1'
    })
})

module.exports = app;