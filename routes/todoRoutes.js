const {Router} = require('express')
const {check} = require('express-validator')
const router = Router()

const {getAllNotes} = require("./controllers/getAllNotes");
const {deleteNote} = require("./controllers/deleteNote");
const {addNote} = require("./controllers/addNote");
const {getOneNote} = require("./controllers/getOneNote");
const {getStats} = require("./controllers/getStats");
const {patchNote} = require("./controllers/patchNote");
const {archiveNote} = require("./controllers/archiveNote");

router.get('/', getAllNotes)

router.delete('/:id', deleteNote)

router.post('/',
    [
        check('category', 'category incorrect').isString().isIn(["idea", "Quote", "Random", "task"]),
        check('content', 'content incorrect').isString().isLength({min: 1, max:322}),
        check('isActive', 'isActive incorrect').isBoolean(),
        check('name', 'name incorrect').isString(),
    ],
    addNote)

router.get('/stats', getStats)

router.get('/:id', getOneNote)

router.patch('/:id',
    [
            check('category', 'category incorrect').isString().isIn(["idea", "Quote", "Random", "task"]),
            check('content', 'content incorrect').isString().isLength({min: 1, max:322}),
            check('isActive', 'isActive incorrect').isBoolean(),
            check('id', 'isActive incorrect').isString().matches(/\d/),
            check('name', 'name incorrect').isString(),
    ],
    patchNote)

router.patch('/archive/:id', archiveNote)


module.exports = router
