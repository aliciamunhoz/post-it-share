const express = require('express')
const MessageController = require('../controllers/messageController')

const message = express.Router()

message.get('/', MessageController.emptyNote)

message.get('/note/:id', MessageController.findOne)

message.post('/notes', MessageController.create)

message.get('/share/:id', MessageController.share)

module.exports = message