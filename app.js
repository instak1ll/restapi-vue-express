const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
    { id: 1, name: 'Artem', value: '+34-639-837-382', marked: false },
    { id: 2, name: 'Pedro', value: '+34-539-337-632', marked: false }
]

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000);
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))