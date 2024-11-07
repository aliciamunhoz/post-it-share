const express = require('express')
const { saveNote, getNote, deleteExpiredNotes, markNoteAsOpened } = require('./db')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/note/:id', (req, res) => {
    res.sendFile(__dirname + '/public/note.html')
})

app.post('/notes', async (req, res) => {
    const { content } = req.body

    if(!content) {
        return res.send('<span>Erro inesperado!</span>')
    }

    const id = crypto.randomUUID()
    await saveNote(id, content)
    res.send(`<p>Compartilhe sua nota através do link
        <br /> 
        <span>${req.headers.origin}/note/${id}</span>
        </p>`)
})

app.get('/share/:id', async (req, res) => {
    await deleteExpiredNotes()

    const { id } = req.params
    const note = await getNote(id)

    if(!note) {
        return res.send('<span class="error">Esta nota não existe!</span>')
    }

    if(!note.opened_at) {
        await markNoteAsOpened(id)
    }

    res.send(note.content)
})

const port = 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})