const express = require('express')
const path = require('path')
const { v4 } = require('uuid')
const app = express()

const CONTACTS = [
    { id: v4, name: 'Artem', value: '+34-639-837-382', marked: false },
    { id: v4, name: 'Pedro', value: '+34-539-337-632', marked: false }
]

app.use(express.json())

app.get('/api/contacts', (req, res) => {
    setTimeout(() => {
        res.status(200).json(CONTACTS)
    }, 1000);
})

app.post('/api/contacts', (req, res) => {
    const contact = { ...req.body, id: v4(), marked: false }
    CONTACTS.push(contact)
    res.status(201).json(contact)
})

app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(8000, () => console.log('Server has been started on port 8000...'))