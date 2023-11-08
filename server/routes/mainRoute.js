const express = require('express');
const router = express.Router();
const Productos = require('../models/productos')


// ------------------- RUTA PARA MOSTRAR MAIN ------------------- //

router.get('', async (req, res) => {
    res.render('index')   
});

// ------------------- RUTA PARA MOSTRAR PRODUCTO ------------------- //

router.get('/producto', async (req, res) => {
    res.render('producto')
});


// ------------------- RUTA PARA MOSTRAR - "ACERCA DE" ------------------- //

router.get('/about', (req, res) => {
    // res.send('<h1>hola mundo</h1>')
    //let nombre = 'Lucía'; // Define una variable llamada 'nombre'
    //res.render('about', { nombre }); // Renderiza una vista llamada 'about' y pasa el nombre como dato a la vista
});

module.exports=router