// 1. Importa los módulos necesarios
const express = require('express')
const expressLayout = require('express-ejs-layouts')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const { appendFile } = require('fs')
require('dotenv').config()

// ----------------------------------------- TRAIGO LA DB

// 2. Trae la configuración de la base de datos
const connectDb = require('./server/config/connectDB')

// ----------------------------------------- LLAMO AL EXPRESS

// 3. Llama al módulo Express y crea una instancia
const app = express()

// ---------------------------------------- CONEXIÓN A LA DB

// 4. Configura el puerto, utilizando el puerto definido en .env o el puerto 3500 por defecto
const PORT = process.env.PORT || 3500

// 5. Conexión a la base de datos
connectDb()

// --------------------------------------- CREO LOS MIDDLEWARE

// 6. Configura los middlewares

// Middleware para analizar datos codificados de formularios
app.use(express.urlencoded({ extended: true }))

// Middleware para analizar datos en formato JSON
app.use(express.json())

// Middleware para archivos estáticos
app.use(express.static('public'))

// Usamos expressLayout para modularizar el EJS
app.use(expressLayout)

// Configuración del motor de vistas y diseño
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

// --------------------------------------- IMPORTO LAS RUTAS

// 7. Importa y utiliza las rutas principales
app.use('/', require('./server/routes/mainRoute'))
app.use('/', require('./server/routes/adminRoute'))

// Inicia el servidor y escucha en el puerto configurado
app.listen(PORT, () => {
    console.log('El servidor se ha conectado')
})
