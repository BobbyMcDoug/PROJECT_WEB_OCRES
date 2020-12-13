const router = require('express').Router();
let Profil = require('../models/profil.model');

router.route('/').get((req, res) => {
  Profil.find()
    .then(Profil => res.json(Profil))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const date_naiss = req.body.date_naiss;
  const photo_prof = req.body.photo_prof;
  const couleur = req.body.couleur;

  const newProfil = new Profil({
    nom,
    prenom,
    date_naiss,
    photo_prof,
    couleur,
  });

  newProfil.save()
  .then(() => res.json('Profil added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Profil.findById(req.params.id)
    .then(Profil => res.json(Profil))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Profil.findByIdAndDelete(req.params.id)
    .then(() => res.json('Profil deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Profil.findById(req.params.id)
    .then(Profil => {
      Profil.nom = req.body.nom;
      Profil.prenom = req.body.prenom;
      Profil.date_naiss = req.body.date_naiss;
      Profil.photo_prof = req.body.photo_prof;
      Profil.couleur = req.body.couleur;

      Profil.save()
        .then(() => res.json('Profil updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;