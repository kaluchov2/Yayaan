const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// Configuracion dotenv
require('dotenv').config({
    path: './config/config.env'
})




//conexion base de datos
 //connectDB();
 const url = process.env.DB;
mongoose.connect(url, {useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true}).then(res=>{
    console.log('conectado a la base de datos')
}).catch(err=>{
    console.log("error de conexion")
})


// body parser
app.use(bodyParser.json())

// Cargar routes
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')

// Desarrollador configuracion
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    //Morgan da informacion para cada request
    //Cors permite tratar react con el localhost3000 sin problema
}

// Usar Rutas
app.use('/api', authRouter)
 app.use('/api', userRouter)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        msg: "Pagina no encontrada"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});