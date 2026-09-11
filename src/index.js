const express = require('express');
const app = express();
const routerProductos= require('./routes/productosRoutes.js');
const routerUsuarios= require('./routes/usuariosRoutes.js');
const PORT = 3000;

app.use(express.json());

app.use("/productos", routerProductos);
app.use("/usuarios", routerUsuarios);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
