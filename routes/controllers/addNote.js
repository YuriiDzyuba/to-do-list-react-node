const {validationResult} = require('express-validator')
const {store} = require('../../store/store')


const addNote = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                massage: "incorrect data in registration dfdfdfdfdf"
            })
        }

        const newNote = req.body

        const newItem = store.addNewNote(newNote)
        newItem
            ? res.status(201).json({massage: 'success', newItem:newItem})
            : res.status(501).json({massage: 'failed'})
    } catch (e) {
        res.status(500).json({massage: 'Something wrong in login'})
        console.log(e)
    }
}

module.exports = {addNote}
