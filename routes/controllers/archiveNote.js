const {store} = require('../../store/store')


const archiveNote = async (req, res) => {
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
}

module.exports = {archiveNote}
