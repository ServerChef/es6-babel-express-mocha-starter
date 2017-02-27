import express from 'express';
const router = express.Router();

import getGulpTasks from 'get-gulp-tasks';

router.get('/', (req, res)=>{
    getGulpTasks('./').then(tasks => {
        console.log("Tasks: ", tasks);

        res.send({'tasks': tasks})

    }).catch((e)=>{
        console.log("FAIL", e);
    })
});

export default router;