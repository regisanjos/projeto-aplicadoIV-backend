const express = require('express');
const needsController = require('../controllers/needsController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Rotas de necessidades (protegidas por autenticação)
router.post('/', authMiddleware.protect, needsController.createNeed);
router.get('/', authMiddleware.protect, needsController.getAllNeeds);
router.get('/:id', authMiddleware.protect, needsController.getNeedById);
router.put('/:id', authMiddleware.protect, needsController.updateNeed);
router.delete('/:id', authMiddleware.protect, needsController.deleteNeed);

module.exports = router;
