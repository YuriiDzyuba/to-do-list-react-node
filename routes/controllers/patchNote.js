const {store} = require('../../store/store')

const patchNote = async (req, res) => {
    try {
        const currentNote = req.body
        console.log(currentNote)
        const isSuccess = store.patchNote(currentNote)
        isSuccess
            ? res.status(201).json({massage: 'success'})
            : res.status(501).json({massage: 'failed'})

    } catch (e) {
        res.status(500).json({massage: 'Something wrong in login'})
        console.log(e)
    }
}

module.exports = {patchNote}
