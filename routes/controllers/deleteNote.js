const {store} = require('../../store/store')

const deleteNote = async (req, res) => {
    try {
        const noteId = req.path.slice(1)
        const isItemDeleted = store.deleteNote(noteId)
        isItemDeleted
            ? res.status(201).json({massage: 'success'})
            : res.status(501).json({massage: 'failed'})

    } catch (e) {
        res.status(500).json({massage: 'Something wrong in login'})
        console.log(e)
    }
}

module.exports = {deleteNote}
