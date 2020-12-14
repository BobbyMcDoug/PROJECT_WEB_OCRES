const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profilSchema = new Schema({
  budget_markting_2019: { type: String, required: true },
  budget_markting_2019: { type: String, required: true },
  budget_markting_2019: { type: String, required: true },
  budget_markting_2019: { type: String, required: true },
  budget_markting_2019: { type: String, required: true },
}, {
  timestamps: true,
});

const Profil = mongoose.model('Profil', profilSchema);

module.exports = Profil;