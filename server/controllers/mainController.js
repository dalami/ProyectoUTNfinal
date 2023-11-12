// const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Product =require('../models/productos')


const signup_post = (req, res) =>{}
const login_post = (req, res) =>{}
const addProduct_post = (req, res) =>{}

const getProducts = async (req, res) => {
    try {
        let perPage = 8;
        let page = req.params.page || 1;

        const products = await Product
            .find({})
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec();

        const count = await Product.countDocuments(); // Obtener el número total de productos

        res.render('index', {
            products,
            current: page,
            pages: Math.ceil(count / perPage)
        });
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