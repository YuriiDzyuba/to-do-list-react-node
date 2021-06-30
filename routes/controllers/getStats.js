const {store} = require('../../store/store')


const getStats = async (req, res) => {
    try {
        const stats = store.getStats()
        stats
            ? res.status(201).json({massage: 'success', stats: stats})
            : res.status(501).json({massage: 'failed'})

    } catch (e) {
        res.status(500).json({massage: 'Something wrong'})
        console.log(e)
    }
}

module.exports = {getStats}
