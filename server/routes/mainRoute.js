const express = require('express');
const router = express.Router();
const Productos = require('../models/productos')


//// ------------------- VISTAS DE LOS MÓDULOS -------------------- ////



// ------------------- RUTA PARA MOSTRAR MAIN ------------------- //

router.get('', async (req, res) => {
    res.render('index')   
});



// ------------------- RUTA PARA MOSTRAR - "ACERCA DE" ------------------- //

router.get('/main/about', (req, res) => {
    res.render('about'); 
});

// ------------------- RUTA PARA MOSTRAR El CARRITO ------------------- //

router.get('/main/carrito', async (req, res) => {
    res.render('carrito')
});

// ------------------- RUTA PARA MOSTRAR El FORMULARIO DE COMPRA ------------------- //

router.get('/main/formcCompra', async (req, res) => {
    res.render('formcCompra')
});

// ------------------- RUTA PARA MOSTRAR LISTADO DE PRODUCTOS ------------------- //

router.get('/main/listadoProductos', async (req, res) => {
    res.render('listadoProductos')
});

// ------------------- RUTA PARA MOSTRAR PRODUCTO ------------------- //

router.get('/main/producto', async (req, res) => {
    res.render('producto')
});

// ------------------- RUTA PARA MOSTRAR LA PAGINA DE USUARIO ------------------- //

router.get('/main/usuario', async (req, res) => {
    res.render('usuario')
});


module.exports=router