const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const router = Router()
const config = require('config')
const {getAllNotes} = require("./controllers/getAllNotes");
const {deleteNote} = require("./controllers/deleteNote");
const {store} = require('../store/store')

router.get( //get all
    '/',
    getAllNotes)

router.delete( //delete note
    '/:id',
    deleteNote
   )



router.post( //add note
    '/',

    async (req, res) => {
        try {
            const {newNote} = req.body
            const newItem = store.addNewNote(newNote)
            newItem
                ? res.status(201).json({massage: 'success', newItem:newItem})
                : res.status(501).json({massage: 'failed'})
        } catch (e) {
            res.status(500).json({massage: 'Something wrong in login'})
            console.log(e)
        }
    })


router.get( //get one note
    '/:id',
    async (req, res) => {
        try {
            const noteId = req.path.slice(1)
            const currentNote = store.getNote(noteId)
            currentNote
                ? res.status(201).json({massage: 'success', currentNote:currentNote})
                : res.status(501).json({massage: 'failed'})

        } catch (e) {
            res.status(500).json({massage: 'Something wrong'})
            console.log(e)
        }
    })


router.get( //get stats
    '/stats/getstat',
    async (req, res) => {
        try {
          const stats = store.getStats()
            stats
                ? res.status(201).json({massage: 'success', stats: stats})
                : res.status(501).json({massage: 'failed'})

        } catch (e) {
            res.status(500).json({massage: 'Something wrong'})
            console.log(e)
        }
    })


router.patch( //patch note
    '/:id',
    async (req, res) => {
        try {
            const {currentNote} = req.body
            const isSuccess = store.patchNote(currentNote)
            isSuccess
                ? res.status(201).json({massage: 'success'})
                : res.status(501).json({massage: 'failed'})

        } catch (e) {
            res.status(500).json({massage: 'Something wrong in login'})
            console.log(e)
        }
    })


router.patch( //patch note
    '/archive/:id',
    async (req, res) => {
        try {
            const noteId = req.path.slice(9)
            const isSuccess = store.archiveHandler(noteId)
            isSuccess
                ? res.status(201).json({massage: 'success'})
                : res.status(501).json({massage: 'failed'})

        } catch (e) {
            res.status(500).json({massage: 'Something wrong in login'})
            console.log(e)
        }
    })


module.exports = router
