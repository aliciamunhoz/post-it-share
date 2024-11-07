const { getNote, markNoteAsOpened, saveNote } = require('../config/db')
const crypto = require('crypto')
const path = require('path')

const MessageController = {
    async create(req, res) {
        const { content } = req.body

        if(!content) {
            res.send('<span class="error">Erro inesperado!</span>')
        }

        const id = crypto.randomUUID()
        await saveNote(id, content)
        res.send(`<p>Compartilhe sua nota através do link
            <br /> 
            <span>${req.headers.origin}/note/${id}</span>
            </p>`)
    },

    async emptyNote(req, res) {
        res.sendFile(path.join(__dirname, '../../public/views/index.html'))
    },

    async findOne(req, res) {
        res.sendFile(path.join(__dirname, '../../public/views/note.html'))
    },

    async share(req, res) {
        const { id } = req.params
        console.log('id:', id)
        const note = await getNote(id)
        console.log('note:', note)

        if(!note) {
            res.send('<span class="error">Esta nota não existe!</span>')
        }

        if(!note.opened_at) {
            await markNoteAsOpened(id)
        }

        res.send(note.content)
    }
}

module.exports = MessageController
