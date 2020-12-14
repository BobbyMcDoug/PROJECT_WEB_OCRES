const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salesSchema = new Schema({
  category: { type: String, required: true },
  date: { type: Date, required: true },
  sales: { type: Number, required: true },
  
}, {
  timestamps: true,
});

const Sales = mongoose.model('Sales', salesSchema);

module.exports = Sales;