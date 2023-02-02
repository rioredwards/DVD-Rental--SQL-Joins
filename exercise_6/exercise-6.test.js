const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 6', () => {
  afterAll(() => pool.end());

  it('find all film titles rented out by customers with the first_name Roberta', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-6.sql`, 'utf-8')
    );
    expect(rows).toEqual([
      { title: 'Scissorhands Slums' },
      { title: 'Factory Dragon' },
      { title: 'Hills Neighbors' },
      { title: 'Devil Desire' },
      { title: 'Virgin Daisy' },
      { title: 'Grail Frankenstein' },
      { title: 'Stranger Strangers' },
      { title: 'Jeepers Wedding' },
      { title: 'Sunrise League' },
      { title: 'Moon Bunch' },
      { title: 'Pirates Roxanne' },
      { title: 'Alien Center' },
      { title: 'Haunting Pianist' },
      { title: 'Blackout Private' },
      { title: 'Vision Torque' },
      { title: 'Lovely Jingle' },
      { title: 'Roots Remember' },
      { title: 'Graffiti Love' },
      { title: 'Mockingbird Hollywood' },
      { title: 'Alley Evolution' },
      { title: 'Chariots Conspiracy' },
      { title: 'Crow Grease' },
      { title: 'Uptown Young' },
    ]);
  });
});
