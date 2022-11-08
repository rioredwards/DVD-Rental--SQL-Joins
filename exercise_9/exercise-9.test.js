const fs = require('fs');
const pool = require('../lib/utils/pool');

describe('exercise 9', () => {
  afterAll(() => pool.end());

  it.skip('find the film title of all inventory items that have never been rented', async () => {
    const { rows } = await pool.query(
      fs.readFileSync(`${__dirname}/exercise-9.sql`, 'utf-8')
    );
    expect(rows).toEqual([{ title: 'Academy Dinosaur' }]);
  });
});
