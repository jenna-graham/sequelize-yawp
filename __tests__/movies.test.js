const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movie routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Genre.bulkCreate([
        {
          name: 'Suspense',
        },
        {
          name: 'Thriller',
        },
        {
          name: 'Drama',
        },
        {
          name: 'Adventure',
        },
        {
          name: 'Action',
        },
        {
          name: 'Romance',
        },
        {
          name: 'Documentary',
        },
      ]);
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
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });

  it.only('#GET /api/v1/movies should return a list of movies', async () => {
    const res = await request(app).get('/api/v1/movies');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(4);
  });
});
