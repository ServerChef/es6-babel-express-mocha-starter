import express from 'express'
import * as gulpUtils from '../utils/gulp'
import GulpRunner from 'gulp-runner'


/**
 * This is the direct reference to the gulp file
 */
import gulpFile from '../../gulpfile.js'


/**
 * This will be used to execute gulp tasks
 * @type {GulpRunner}
 */
const gulpRunner = new GulpRunner('gulpfile.js');


const router = express.Router();

router.get('/', (req, res)=>{
    const tasks = gulpUtils.getTasks(gulpFile);

    res.send({'tasks': tasks})
});


router.get('/:taskId/execute', (req, res) => {
    const taskId = req.params.taskId;

    if(!gulpUtils.hasTask(gulpFile, taskId)){
        throw new Error("Gulp task not found");
    }

    gulpRunner.run(taskId, (err)=>{
        res.send(err)
    });

    res.send({"success": true});
});

export default router;