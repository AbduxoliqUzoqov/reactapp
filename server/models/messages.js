// MessageModel.js
const mongoose = require('mongoose');

// Xabar uchun Schema yaratish
const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Schema'dan model yaratish
const MessageModel = mongoose.model('Message', MessageSchema);

// Modelni eksport qilish
module.exports = MessageModel;