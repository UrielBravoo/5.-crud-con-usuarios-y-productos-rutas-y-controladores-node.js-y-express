const express= require('express');
const router= express.Router();
const { obtenerUsuarios,obtenerUsuario,crearUsuario,actualizarUsuario,modificarUsuario,eliminarUsuario}= require('../controllers/usuariosControllers');

router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);

router.post('/', crearUsuario);

router.put('/:id', actualizarUsuario);

router.patch('/:id', modificarUsuario);

router.delete('/:id', eliminarUsuario);

module.exports = router;