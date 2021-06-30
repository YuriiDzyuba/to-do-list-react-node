const {v4: uuidv4} = require('uuid');

const store = {
    _state: {
        emptyNote: {
            id: 'emptyNote',
            name: '',
            category: '',
            content: '',
            date: '',
            changedDate: '',
            isActive: true
        },
        'ddsf-dfsd-dfdf-sdfsd': {
            id: 'ddsf-dfsd-dfdf-sdfsd',
            name: 'Shopping list',
            category: 'Random',
            content: 'buy this and that',
            date: new Date(),
            changedDate: '',
            isActive: true
        },
        'ebed726-8edf-04c0-3628-77578a3a4758': {
            id: 'ebed726-8edf-04c0-3628-77578a3a4758',
            name: 'Where does it come from?',
            category: 'Random',
            content: ' years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, cons',
            date: new Date(),
            changedDate: '',
            isActive: false
        },
        '163d38-3775-2024-5f0a-0e7ab02e51': {
            id: '163d38-3775-2024-5f0a-0e7ab02e51',
            name: 'Why do we use',
            category: 'task',
            content: 'e content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it loo',
            date: new Date(),
            changedDate: '',
            isActive: true
        },
        'acc1bb8-4f6a-0838-4ce-a71abbaf8347': {
            id: 'acc1bb8-4f6a-0838-4ce-a71abbaf8347',
            name: 'What is Lorem',
            category: 'task',
            content: '3 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of eth',
            date: new Date(),
            changedDate: '',
            isActive: false
        },
        '01dabc-2ddd-ae6e-484-e8b36840ca1': {
            id: '01dabc-2ddd-ae6e-484-e8b36840ca1',
            name: 'The standard Lorem Ipsum passag',
            category: 'idea',
            content: 'ection 1.10.32 of "de Finibus Bonorum et',
            date: new Date(),
            changedDate: '',
            isActive: true
        },
        'cc82ea-1f03-50bc-68c-48cc60fba01a': {
            id: 'cc82ea-1f03-50bc-68c-48cc60fba01a',
            name: 'inibus Bonorum et',
            category: 'Quote',
            content: '1914 translation by H. Rackham',
            date: new Date(),
            changedDate: '',
            isActive: false
        },
        '8de7e82-12d6-db03-82c-45f3c0707b': {
            id: '8de7e82-12d6-db03-82c-45f3c0707b',
            name: 't Malorum", written by Cicero in 45 BC',
            category: 'idea',
            content: 't Malorum", written by Cicero in 45 BCt Malorum", written by Cicero in 45 BC',
            date: new Date(),
            changedDate: '',
            isActive: true
        }
    },

    deleteNote(id) {
        if (this._state.hasOwnProperty(id)) {
            delete this._state[id]
            return true
        } else return false
    },

    addNewNote(data) {
        let newItem = {}
        let id = uuidv4()
        newItem={
            id: id,
            name: data.name,
            category: data.category,
            content:  data.content,
            date: new Date(),
            changedDate: data.changedDate,
            isActive: true
        }
        this._state[id]=newItem
        return  this._state[id];
    },

    getNote(id){
        if (this._state.hasOwnProperty(id)) {
            return this._state[id]
        } else return false
    },

    archiveHandler(id){
        if (this._state.hasOwnProperty(id)) {
            this._state[id].isActive=!this._state[id].isActive
            return true
        } else return false
    },

    patchNote(note){
        if (this._state.hasOwnProperty(note.id)) {
            this._state[note.id]=note
            return true
        } else return false
    },


    getStats(){

         const allCategories = {}

         Object.values(this._state).forEach((e, i) => {
            if (e.category) {
                if (allCategories[e.category]) {
                    e.isActive
                        ? allCategories[e.category].active = allCategories[e.category].active + 1
                        : allCategories[e.category].archived = allCategories[e.category].archived + 1
                } else {
                    allCategories[e.category] = {active: 0, archived: 0}
                    e.isActive
                        ? allCategories[e.category].active = 1
                        : allCategories[e.category].archived = 1
                }
            }
        })

        return allCategories
    },

    getState() {
        return this._state
    }



}

module.exports = {store}
