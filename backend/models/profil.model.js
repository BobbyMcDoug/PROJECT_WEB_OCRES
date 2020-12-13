const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profilSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  date_naiss: { type: String, required: true },
  photo_prof: { type: String, required: true },
  couleur: { type: String, required: true },
}, {
  timestamps: true,
});

const Profil = mongoose.model('Profil', profilSchema);

module.exports = Profil;