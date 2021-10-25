const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// crea una tarea 
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

// Obtener las tareas por proyecto 
router.get('/',
    auth,
    tareaController.ObtenerTareas
);

// Actualizar Tarea 
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

// Eliminar Tarea 
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router;