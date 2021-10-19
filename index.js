const express = require('express');
const conectarDB = require('./config/db');

// crear el servidor 
const app = express();

//Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

/* Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola Humanos');
});*/

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));


// arrancando la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});