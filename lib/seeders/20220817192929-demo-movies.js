'use strict';

const db = require('../models');

module.exports = {
  async up() {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Movie.bulkCreate([
      {
        genre_id: 1,
        title: 'Twister',
        description: 'It is a tornado movie',
        releaseYear: 1996,
      },
      {
        genre_id: 4,
        title: 'Jumanji',
        description: 'A board game comes to life',
        releaseYear: 1995,
      },
      {
        genre_id: 1,
        title: 'The Thing',
        description: 'Antarctic outpost invaded by frozen alien',
        releaseYear: 1982,
      },
      {
        genre_id: 6,
        title: 'The Notebook',
        description: 'A movie about a notebook, I do not know',
        releaseYear: 2004,
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
