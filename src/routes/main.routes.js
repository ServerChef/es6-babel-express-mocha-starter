// Import node module
import express from 'express';
const router = express.Router();

import taskRoutes from './task.routes';

// Arrow functions
router.get('/', (req, res) => {
  res.send({message: 'Hello World!!'});
});

router.use('/tasks', taskRoutes);

// Exporting an object as the default import for this module
export default router;
