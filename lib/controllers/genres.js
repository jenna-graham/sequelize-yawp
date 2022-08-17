const { Router } = require('express');
const db = require('../models');

module.exports = Router().get('/', async (req, res, next) => {
  try {
    const data = await db.Genre.findAll();
    console.log(data);
    res.json(data);
  } catch (e) {
    next(e);
  }
});
