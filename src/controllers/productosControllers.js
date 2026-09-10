let productos = require('../data/productos.json');

const obtenerProductos =(req, res) =>{
    res.json(productos);
}
const obtenerProducto=(req, res) =>{
    const { id } = req.params;
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.json({message: 'Producto no encontrado'});
    }
    res.json(producto);
}
const crearProducto=(req, res) =>{
    const { nombre,precio,stock}= req.body;
    const id= productos.length + 1;
    if (nombre==undefined || precio==undefined || stock==undefined) {
        return res.json({message: 'nombre,precio y stock son obligatorios'});
    }
    const nuevoProducto= {id,nombre,precio,stock};
    productos.push(nuevoProducto);
    res.json({message: 'Producto creado', nuevoProducto});
};

const actualizarProducto=(req, res) =>{
    const { id } = req.params;
    const { nombre,precio,stock}= req.body;
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.json({message: 'Producto no encontrado'});
    }
    producto.nombre = nombre;
    producto.precio = precio;
    producto.stock = stock;
    res.json({message: 'Producto actualizado', producto});
};
const modificarProducto=(req, res) =>{
    const { id } = req.params;
    const { nombre,precio,stock}= req.body;

    const productoAModificar= productos.find(p => p.id === id);

    if (!productoAModificar) {
        return res.json({message: 'Producto no encontrado'});
    }
    if (nombre !==undefined){productoAModificar.nombre = nombre};
    if (precio !==undefined){productoAModificar.precio = precio};
    if (stock !==undefined){productoAModificar.stock = stock}
   res.json({message: 'Producto modificado', productoAModificar});
}
const eliminarProducto=(req, res) =>{
    const { id } = req.params;
    const productos= productos.filter(p => p.id !== id);
    res.json({message: 'Producto eliminado', productos});
}

const venderProducto=(req, res) =>{
    const { id } = req.params;
    const { cantidad } = req.body;
    const producto = productos.find(p => p.id == id);
    if (!producto) {
        return res.json({message: 'Producto no encontrado'});
    }
    if (cantidad <= 0) {
        return res.json({message: 'Cantidad inválida'});
    }
    if (producto.stock < cantidad) {
        return res.json({message: 'Stock insuficiente'});
    }
    producto.stock -= cantidad;
    res.json({message: 'Producto vendido',
         cantidadVendida: cantidad,
        stockRestante: producto.stock,
        producto});
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    modificarProducto,
    eliminarProducto,
    venderProducto
};