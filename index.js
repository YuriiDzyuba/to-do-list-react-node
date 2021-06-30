const express = require('express')
const config = require('config')

const app =express()
const PORT = config.get('port') || 5000


app.use(express.json({extended: true}))
app.use('/api/todo/', require('./routes/todoRoutes'))

async function start() {
    try {
        app.listen(PORT, ()=>{
            console.log(`Server has been started on port ${PORT}`)
        })
    } catch (e) {
        console.log('Server Error',e.massage)
        process.exit(1)
    }

}
start()
