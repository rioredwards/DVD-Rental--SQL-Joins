const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 16', () => {
  afterAll(() => pool.end());

  it.skip('find the first 10 movies with their actors', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise_16.sql`, 'utf-8')
    );
    console.log(rows[0]);
    expect(rows).toEqual([
      {
        title: 'Airplane Sierra',
        description:
          'A Touching Saga of a Hunter And a Butler who must Discover a Butler in A Jet Boat',
        release_year: 2006,
        actors: [
          {
            actor_id: 99,
            last_name: 'Mostel',
            first_name: 'Jim',
            last_update: '2013-05-26T14:47:57.62',
          },
          {
            actor_id: 133,
            last_name: 'Penn',
            first_name: 'Richard',
            last_update: '2013-05-26T14:47:57.62',
          },
          {
            actor_id: 162,
            last_name: 'Kilmer',
            first_name: 'Oprah',
            last_update: '2013-05-26T14:47:57.62',
          },
          {
            actor_id: 170,
            last_name: 'Hopper',
            first_name: 'Mena',
            last_update: '2013-05-26T14:47:57.62',
          },
          {
            actor_id: 185,
            last_name: 'Bolger',
            first_name: 'Michael',
            last_update: '2013-05-26T14:47:57.62',
          },
        ],
      },
    ]);
  });
});
