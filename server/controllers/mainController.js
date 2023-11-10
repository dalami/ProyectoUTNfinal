// const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Product =require('../models/productos')


const signup_post = (req, res) =>{}
const login_post = (req, res) =>{}
const addProduct_post = (req, res) =>{}

const getProducts = async (req, res) => {
    try {
      const products = await Product.find(); // Obtener los productos de la base de datos
      res.render('index', { products }); // Renderizar la vista "home" con los datos de los productos
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar la página');
    }
  };

const getProductsItem = async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).send('Producto no encontrado');
            return;
        }
        res.render('producto', { product }); // Pasa el objeto `product` a la vista
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al cargar la página');
    }
};


module.exports = {
    signup_post,
    login_post,
    addProduct_post,
    getProductsItem,
    getProducts
}