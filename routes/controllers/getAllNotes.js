const {store} = require('../../store/store')


const getAllNotes = async (req, res) => {
    try {
        res.status(201).json({massage: 'success',initialState:store.getState()})
    } catch (e) {
        res.status(500).json({massage: 'Something wrong'})
        console.log(e)
    }
}

module.exports = {getAllNotes}
