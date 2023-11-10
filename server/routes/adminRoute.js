const express = require('express');
const router = express.Router();
const Usuarios= require('../models/usuarios')
const Productoss= require('../models/productos')
const bcrypt = require('bcrypt');

const{
    signup_post,
    login_post,
    addProduct_post
} = require('../controllers/adminController')


//---------------------- GET -------------------------//

// -- Mostramos el panel de administración --
router.get('/admin', (req,res)=>{
    res.render('admin/index') // Renderiza una vista para el panel de administración
})   

// -- Mostramos el formulario de agregar un producto --
router.get('/add-product', (req,res)=>{ 
    res.render('admin/add-product') // Renderiza una vista para agregar
})

// -- Mostramos el formulario de registro --
router.get('/register', (req,res)=>{
    res.render('admin/index')
})



//---------------------- POST -------------------------//


// ------------------- PROCESAMOS EL FORMULARIO PARA INICIAR SESIÓN ------------------- //

router.post('/admin',(req,res)=>{})

// ------------------- PROCESAMOS EL FORMULARIO PARA AGREGAR UN PRODUCTO ------------------- //

router.post('/add-product', (req,res)=>{})


// ------------------- PROCESAMOS EL FORMULARIO PARA REGISTRARSE ------------------- //

router.post('/register', (req,res)=>{})


module.exports=router