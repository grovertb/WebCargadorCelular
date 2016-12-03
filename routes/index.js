var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio' });
});

router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros' });
});

router.get('/etapa1', function(req, res, next) {
  res.render('etapa1', { title: 'Etapa 1' });
});

router.get('/etapa2', function(req, res, next) {
  res.render('etapa2', { title: 'Etapa 2' });
});

router.get('/etapa3', function(req, res, next) {
  res.render('etapa3', { title: 'Etapa 3' });
});

router.get('/producto', function(req, res, next) {
  res.render('producto', { title: 'Producto' });
});

router.get('/contactenos', function(req, res, next) {
  res.render('contactenos', { title: 'Contáctenos' });
});

module.exports = router;
