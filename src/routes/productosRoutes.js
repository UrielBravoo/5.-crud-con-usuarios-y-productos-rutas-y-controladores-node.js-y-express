const express= require('express');

const router= express.Router();

const { obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    modificarProducto,
    eliminarProducto } = require('../controllers/productosControllers');

router.get('/', obtenerProductos);
router.get('/:id', obtenerProducto);

router.post('/', crearProducto);
router.put('/:id', actualizarProducto);

router.patch('/:id', modificarProducto);

router.delete('/:id', eliminarProducto);

module.exports = router;
