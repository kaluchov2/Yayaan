const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(res=>{
        console.log(`Conectado a la base de datos: ${connection.connection.host}`);
    }).catch(err=>{
        console.log('ERROR DE CONEXION')
    })

    
}; 

module.exports = connectDB;