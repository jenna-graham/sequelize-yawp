'use strict';

const db = require('../models');

module.exports = {
  async up () {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await db.Genre.bulkCreate([
      {
        name: 'Suspense'
      },
      {
        name: 'Thriller'
      },
      {
        name: 'Drama'
      },
      {
        name: 'Adventure'
      },
      {
        name: 'Action'
      },
      {
        name: 'Romance'
      },
      {
        name: 'Documentary'
      }
    ]);
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
