let usuarios = require('../data/usuarios.json');

const obtenerUsuarios =(req, res) =>{
    res.json(usuarios);
}
const obtenerUsuario =(req, res) =>{
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.json({message: 'Usuario no encontrado'});
    }
    res.json(usuario);
}
const crearUsuario =(req, res) =>{
    const { nombre, email } = req.body;
    const id= usuarios.length + 1;
    if (nombre == undefined || email== undefined) {
        res.json({message: 'Faltan datos'});
    }
    const nuevoUsuario = {
        id,
        nombre,
        email
    };
    usuarios.push(nuevoUsuario);

    res.json({message: 'Usuario creado exitosamente', usuario: nuevoUsuario});
}
const actualizarUsuario =(req, res) =>{
    const { id } = req.params;
    const { nombre, email } = req.body;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.json({message: 'Usuario no encontrado'});
    }
    usuario.nombre=nombre;
    usuario.email=email;

    res.json({message: 'Usuario actualizado exitosamente', usuario});
}
const modificarUsuario =(req, res) =>{
    const {id} = req.params;
    const {nombre, email} = req.body;
    const usuario = usuarios.find(u => u.id === id);
    if (!usuario) {
        return res.json({message: 'Usuario no encontrado'});
    }   
    if (nombre !== undefined) {
        usuario.nombre = nombre;
    }
    if (email !== undefined) {
        usuario.email = email;
    }
    res.json({message: 'Usuario modificado exitosamente', usuario});
}
const eliminarUsuario =(req, res) =>{
    const {id}=req.params;
    usuarios=usuarios.filter(u => u.id !== id);
    res.json({message: 'Usuario eliminado exitosamente'});
}
    


module.exports = {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    modificarUsuario,
    eliminarUsuario
}