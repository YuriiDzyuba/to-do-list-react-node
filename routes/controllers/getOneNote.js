const {store} = require('../../store/store')

const getOneNote = async (req, res) => {
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
}

module.exports = {getOneNote}
